const express = require('express');
const router = express.Router();
const ProductsControllerApi = require('../../controllers/api/productsApi');

// ************ Lista completa de Productos ************ 
 router.get('/', ProductsControllerApi.products)
// ************ Consultar detalles de un producto en particular ************ 
router.get('/:id', ProductsControllerApi.productsDetail)
// ************ Nuestras 2 Categorias de productos ************ 
router.get('/categories', ProductsControllerApi.category)
router.get('/status', ProductsControllerApi.status)
// ************ Ultimo producto subido ************ 
router.get("/lastproduct", ProductsControllerApi.lastProduct);

module.exports = router;