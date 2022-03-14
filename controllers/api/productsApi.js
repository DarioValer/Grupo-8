const db = require('../../database/models/index');

const apiProductsController23 = {
    products: (req,res)=>{
        db.Product.findAll()
            .then(products=>{
                let answer = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: '/api/products'
                    },
                    data: products.map(product => {
                        return{
                            id: product.id,
                            title: product.title,
                            descrip: product.descrip,
							//StatusId: product.StatusId,
							//CategoryId: product.CategoryId,
                            // image: '/img/' + product.image,
                            detail: '/api/products/' + product.id
                        }
                    })
                }
            res.json(answer)
            })
            .catch(err => {
                res.send(err)
            })
    },
    productsDetail: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then(user=>{
            let answer = {
                meta:{
                    status: 200,
                    total: product.id,
                    url: "/api/products/" + product.id
                },
                data: {
                        id: user.id,
                        first_name: user.first_name,
                        email: user.email,
                        avatar: '/img/avatars/' + user.avatar,
                        detail: '/api/users/' + user.id
                    }
                }
                res.json(answer)
        })
        .catch(err => {
            res.send('Este Id no corresponde a un usuario registrado')
        })
    }

}

module.exports = apiProductsController23;