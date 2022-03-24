const express = require('express');
const path = require('path')


// ************ Middlewares ************ 
const upload = require('../middlewares/multerMiddlewareProduct')
const router = express.Router();
const productController = require('../controllers/productsController')
const authMiddleware = require('../middlewares/authMiddleware')
const validationsMiddlewareAddProduct = require('../middlewares/validationsMiddlewareAddProduct');


router.get('/', productController.index);
router.get('/cart', productController.cart);
router.get('/gracias', productController.gracias);

// ************ Add Product ************ 
router.get('/addProduct', authMiddleware, productController.addProduct);
router.post('/addProduct', authMiddleware, upload.any(), validationsMiddlewareAddProduct, productController.newProduct);


// ************ Edit Product ************ 
router.get('/editProduct/:id', authMiddleware, productController.editProduct); 
router.put('/editProduct/:id', authMiddleware, upload.any(), validationsMiddlewareAddProduct, productController.update); 
router.get('/detail/:id', productController.detail);
router.delete('/editProduct/:id', productController.destroy);
router.post('/search', productController.search);


module.exports = router;