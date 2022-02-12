const path = require('path')
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Nombre es un Campo obligatorio'),
    body('lastName').notEmpty().withMessage('Apellido es un Campo obligatorio'),
    body('userAlias').notEmpty().withMessage('Usuario es un Campo obligatorio'),
    body('eMail').notEmpty().withMessage('Email es un Campo obligatorio').bail()
    .isEmail().withMessage("Debes escribir un formato de correo electronico valido"),
    body('password').notEmpty().withMessage('Contrasena es un Campo obligatorio'),
];

