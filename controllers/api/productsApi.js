const db = require('../../database/models/index');

const apiProductsController23 = {
    products: (req,res)=>{
        db.Product.findAll()
            .then(products=>{
               /* db.Status.findAll()
                        .then (status => {
                           console.log(status)
                           console.log(status.dataValues.name)
                        })*/
                //let novedad1 = product.filter(product => product.StatusId == 1)
                
                let answer = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: '/api/products'
                    },

                    data:

                     products.map(product => {
                        //let state = db.Status.findByPk(id)
                        //.then (status => {console.log(status)})*/
                        /*if (product.StatusId == state.id){
                            const statuss =  state.name
                        }*/
                        return{
                            id: product.id,
                            title: product.title,
                            descrip: product.descrip,
                            Status: product.StatusId,
							//Productproduct.StatusId,
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
        .then(product=>{
            let answer = {
                meta:{
                    status: 200,
                    total: product.id,
                    url: "/api/products/" + product.id
                },
                data: {
                    id: product.id,
                    title: product.title,
                    descrip: product.descrip,
                    Status: product.StatusId,
                    //Productproduct.StatusId,
                    //CategoryId: product.CategoryId,
                    // image: '/img/' + product.image,
                    detail: '/api/products/' + product.id
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