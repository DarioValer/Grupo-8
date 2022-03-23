// const db = require('../../database/models/index');

// const apiProductsController = {
//     products:(req,res)=>{
//         db.Product.findAll()
//         .then(categories => {

//         db.Product.findAll({
//         include:['Status','Category'],
//         order:[["id", "ASC"]],
//         limit:10
//     })
//         .then(products=>{
            
//             let Categoria1 = products.filter(products => products.CategoryId == 1)
//             let Categoria2 = products.filter(products => products.CategoryId == 2)
//             let Categoria3 = products.filter(products => products.CategoryId == 3)

//             let Status1 = products.filter(products => products.CategoryId == 1)
//             let Status2 = products.filter(products => products.CategoryId == 2)
//             let Status3 = products.filter(products => products.CategoryId == 3)


//             let answer = {
//                 meta: {
//                     status: 200,
//                     total: products.length,
//                     url: '/api/products',
//                     countByCategory : [
//                         {smartphonesAndTablets: Categoria1.length},
//                         {gamerArticles: Categoria2.length},
//                         {accesories: Categoria3.length}
//                     ],
//                     countByStatus : [
//                         {novelties: Status1.length},
//                         {offers: Status2.length},
//                         {general: Status3.length}
//                     ]
//                 },
//                 data: products.map(product => {
//                     return{
//                         id: product.id,
//                         title: product.title,
//                         descrip: product.descrip,
//                         status: {name:product.Status.name},
//                         //category: {name:product.Category.name},
//                         image: '/img/' + product.image,
//                         detail: '/api/products/' + product.id
//                     }
//                 })
//             }
        
//             res.json(answer)
//         })    
//         })
//         .catch(err => {
//             res.send(err)
//         })
//     },


//     productsDetail: (req,res) => {
//         db.Product.findByPk(req.params.id, {
//             include:['Status','Category']
//         })
//         .then(product=>{
//             let answer = {
//                 meta:{
//                     status: 200,
//                     total: product.id,
//                     url: "/api/products/" + product.id
//                 },
//                 data: {
//                     id: product.id,
//                     title: product.title,
//                     descrip: product.descrip,
//                     status: {name:product.Status.name},
//                     //category: {name:product.Category.name},
//                     image: '/img/' + product.image,
//                     detail: '/api/products/' + product.id
//                     }
//                 }
//                 res.json(answer)
//         })
//         .catch(err => {
//             res.send('Este Id no corresponde a un producto registrado')
//         })
//     }

// }

// module.exports = apiProductsController;

const db = require('../../database/models/index');

const apiProductsController = {
    products: (req, res) => {
		db.Product.findAll()
		   .then(products => {
		       return res.status(200).json({
				count: products.length,
				status: 200,   
				products: products,
				//countByCategory:   
			   })
		   })
		   .catch(err => {
			res.send(err)
		})
	},

	productsDetail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			/*include: [{association: "status"}, {association: "categories"}]*/
		})
		.then(product => {
			return res.status(200).json({
			 url: product.image, 
			 status: 200,   
			 product: product,
			 
			})
		})
	   .catch(err => {
		res.send(err)
	})
	},
	category: (req, res) => {
		db.Category.findAll()
		.then(categories => {
			return res.status(200).json({
				count: categories.length,
				categories: categories,
			})
		})
	},
	status: (req, res) => {
		db.Status.findAll()
		.then(status => {
			return res.status(200).json({
				count: status.length,
				status: status,
			})
		})
	},
	lastProduct: (req, res) => {

        db.Product.findAll({
            // include: ["Category"],
            order: [
                ["id", "DESC"],
            ],
            limit: 1
        })
            .then(product => {
				return res.status(200).json({
					url: product.image, 
					status: 200,   
					product: product,
					
				   })
               
            })
            .catch(err => {
                res.send(err)
            })

    }

}


module.exports = apiProductsController;