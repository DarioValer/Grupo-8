const db = require('../../database/models/index');

const ProductsControllerApi = {
    products: (req,res)=>{
		db.Category.findAll({
            include:['products']
        })
		     .then(categories => {
				db.Products.findAll({
				include:['categories', 'statuses', 'products']
			})
       
            .then(products=>{
				let arrayCategorias = []
            for(let i=0; i<categories.length ; i++){
                arrayCategorias.push({
                    nombre: categories[i].dataValues.name,
                    total: categories[i].dataValues.products.length
                })
            }

				let smartphones = products.filter(product => product.category_id == 1)
				let gamer = products.filter(product => product.category_id == 2)
                let accesories = products.filter(product => product.category_id == 3)
                let answer = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: '/api/products',
						categoryNames: arrayCategorias,
						CountByCategory: [
							{smartphones: smartphones.length},
							{gamer: gamer.length},
							{accesories: accesories.length}
						]
                    },
                    data: products.map(product => {
                        return{
                            id: product.id,
                            title: product.title,
                            descrip: product.descrip,
							// StatusId: product.StatusId,
							// CategoryId: product.CategoryId,
                            // image: '/img/' + product.image,
                            detail: '/api/products/' + product.id,
							CategoryId: {name: product.category_id.name},
					        StatusId: {name: product.StatusId.name}
                        }
                    })
                }
            res.json(answer)
            })
		})
            .catch(err => {
                res.send(err)
            })
			 },
    productsDetail: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then(products=>{
            let answer = {
                meta:{
                    status: 200,
                    url: "/api/products/" + products.id
                },
                data: {
					id: products.id,
					title: products.title,
					descrip: products.descrip,
					image: '/img/' + products.image,
					detail: '/api/products/' + products.id,
					// CategoryId: {name: products.CategoryId.name},
					// StatusId: {name: products.StatusId.name},
                    }
                }
                res.json(answer)
        })
        .catch(err => {
            res.send('Este Id no corresponde a un producto registrado')
        })
    }

}

module.exports = ProductsControllerApi;