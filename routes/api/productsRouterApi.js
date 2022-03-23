const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/productsApi');

// ************ Lista completa de Productos ************ //
router.get('/', apiProductsController.products);

// ************ Nuestras 2 Categorias de productos ************ //
router.get('/categories', apiProductsController.category);
router.get('/status', apiProductsController.status);
// ************ Ultimo producto subido ************ //
router.get("/lastproduct", apiProductsController.lastProduct);
// ************ Consultar detalles de un producto en particular ************ //
router.get('/:id', apiProductsController.productsDetail);

module.exports = router;