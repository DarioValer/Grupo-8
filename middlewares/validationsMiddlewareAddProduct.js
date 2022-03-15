const { check } = require('express-validator');

validationsMiddlewareAddProduct = [
    check('title').notEmpty().withMessage('Nombre del Producto es un Campo obligatorio').isLength({ min:5}).withMessage('Su Nombre debera tener al menos 5 caracteres'),
    check('shortDescription').notEmpty().withMessage('Descripcion del Producto es un Campo obligatorio').isLength({ min:20}).withMessage('Debera tener al menos 20 caracteres'),
   // check('image').notEmpty().isIn(['jpg', 'jpeg', 'png', 'gif']).withMessage('Debera ser un archivo JPG, JPEG, PNG o GIF'),
    check('price').notEmpty().withMessage('Precio es un Campo obligatorio').isNumeric().withMessage('Su Precio debera ser numerico'),
    check('category').notEmpty().withMessage('Debes elegir una Categoria'),
    check('status').notEmpty().withMessage('Debes elegir un estado'),
];

module.exports = validationsMiddlewareAddProduct;