const db = require('../../database/models/index');

const apiProductsController = {
    index: (req, res) => {
		db.Product.findAll()
		   .then(products => {
		        res.json(products);
		   })
		   .catch(err => {
			res.send(err)
		})
	},


}

module.exports = apiProductsController;