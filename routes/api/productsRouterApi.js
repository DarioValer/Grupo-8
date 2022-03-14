const express = require('express');
const router = express.Router();
const ProductsControllerApi = require('../../controllers/api/productsApi');

// ************ Lista completa de Productos ************ 
 router.get('/', ProductsControllerApi.products)
// ************ Consultar detalles de un producto en particular ************ 
router.get('/:id', ProductsControllerApi.productsDetail)

module.exports = router;