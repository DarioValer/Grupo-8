const express = require('express');
const path = require('path')
const upload = require('../middlewares/multerMiddlewareProduct')
const router = express.Router();
const productController = require('../controllers/productsController')
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/', productController.index);
//router.get('/cart', productController.cart);
router.get('/addProduct', authMiddleware, productController.addProduct);
router.post('/addProduct', authMiddleware, upload.any(), productController.newProduct);
router.get('/editProduct/:id', authMiddleware, productController.editProduct); 
router.put('/editProduct/:id', authMiddleware, upload.any(), productController.update); 
router.get('/detail/:id', productController.detail);
router.delete('/editProduct/:id', productController.destroy);


module.exports = router;