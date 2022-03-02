const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require('../database/models/index');
const Product = require("../database/models/Product");
const { validationResult } = require('express-validator');

/*const { devNull } = require('os');
const { title } = require('process');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");*/


const productController = {
	index: async (req, res) => {
		db.Product.findAll({
			order: [["title", "ASC"]],
		})
		   .then(products => {
		        res.render('product', {products});
		   })
		   .catch(err => {
			res.send(err)

		})
	},
	
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			/*include: [{association: "status"}, {association: "categories"}]*/
		})
		.then(product => {
			res.render('detail', {product});
	   })
	   .catch(err => {
		res.send(err)
	})
	},

	
	cart: (req, res) => {
		res.render('cart');
	},
	
	addProduct: (req, res) => {
		res.render('addproduct');
	},
	
	newProduct: (req, res) => {
		const resultValidation = validationResult(req);
		if (!resultValidation.errors.length) {
		db.Product.create({
			title: req.body.title,
			price: parseFloat(req.body.price),
			//image: req.files[0].filename,
			shortDescription: req.body.shortDescription,
			StatusId: req.body.status,
			CategoryId: req.body.category
		})
		.then( res.redirect('products'))
		.catch(err => {res.send(err)})
	} else { return res.render('addproduct', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });}
        },

	editProduct: (req, res) => {
		db.Product.findByPk(req.params.id)
		.then(product => {
			res.render('editproduct', {product});
		})
	},
	
	update: (req, res) => {
		const resultValidation = validationResult(req);
		if (!resultValidation.errors.length) {
		db.Product.update({
			title: req.body.title,
			price: parseFloat(req.body.price),
			//image: req.files[0].filename,
			shortDescription: req.body.shortDescription,
			StatusId: req.body.status,
			CategoryId: req.body.category
		},
		{
			where: {
				id: req.params.id
			},
		})
		.then( res.redirect('products'))
		.catch(err => {res.send(err)})
	} else { return res.render('addproduct', {
		errors: resultValidation.mapped(),
		oldData: req.body
	});} 
	},
		
/*
	delete: (req, res) => {
		db.Product.findByPk(req.params.id)
		.then(product => {
			res.render('/', {product});
		})

	}*/

	destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products')
    }
}

module.exports = productController;