const db = require('../../database/models/index');

const apiProductsController23 = {
    products:(req,res)=>{
        db.Product.findAll()
        .then(categories => {

        db.Product.findAll({
        include:['Status','Category'],
        order:[["id", "ASC"]],
        limit:10
    })
        .then(products=>{
            
            let Categoria1 = products.filter(products => products.CategoryId == 1)
            let Categoria2 = products.filter(products => products.CategoryId == 2)
            let Categoria3 = products.filter(products => products.CategoryId == 3)

            let Status1 = products.filter(products => products.CategoryId == 1)
            let Status2 = products.filter(products => products.CategoryId == 2)
            let Status3 = products.filter(products => products.CategoryId == 3)


            let answer = {
                meta: {
                    status: 200,
                    total: products.length,
                    url: '/api/products',
                    countByCategory : [
                        {smartphonesAndTablets: Categoria1.length},
                        {gamerArticles: Categoria2.length},
                        {accesories: Categoria3.length}
                    ],
                    countByStatus : [
                        {novelties: Status1.length},
                        {offers: Status2.length},
                        {general: Status3.length}
                    ]
                },
                data: products.map(product => {
                    return{
                        id: product.id,
                        title: product.title,
                        descrip: product.descrip,
                        status: {name:product.Status.name},
                        category: {name:product.Category.name},
                        image: '/img/' + product.image,
                        detail: '/api/products/' + product.id
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
        db.Product.findByPk(req.params.id, {
            include:['Status','Category']
        })
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
                    status: {name:product.Status.name},
                    category: {name:product.Category.name},
                    image: '/img/' + product.image,
                    detail: '/api/products/' + product.id
                    }
                }
                res.json(answer)
        })
        .catch(err => {
            res.send('Este Id no corresponde a un producto registrado')
        })
    }

}

module.exports = apiProductsController23;