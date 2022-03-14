const { check } = require('express-validator');
const { body } = require('express-validator');
const path = require('path');

validationsMiddleware = [
    check('name').notEmpty().withMessage('Nombre es un Campo obligatorio').isLength({ min:2}).withMessage('Nombre debera tener al menos 2 caracteres'),
    check('lastName').notEmpty().withMessage('Apellido es un Campo obligatorio').isLength({ min:2}).withMessage('Apellido debera tener al menos 2'),
    check('userAlias').notEmpty().withMessage('Usuario es un Campo obligatorio'),
    check('eMail').notEmpty().withMessage('Email es un Campo obligatorio').bail()
    .isEmail().withMessage("Debes escribir un formato de correo electronico valido"),
    check('password').notEmpty().withMessage('Contrasena es un Campo obligatorio').bail().isLength({ min: 8}).withMessage('La contrasena debera tener al menos 8 caracteres'),
    //check('avatar').isIn([ "PNG", "JPEG", "GIF" , "JPG"]).withMessage('Debera ser un archivo JPG, JPEG, PNG o GIF'),
    // body('avatar').custom((value, { req }) => {

	// 	let file = req.file;

	// 	let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

	// 	if (file) {

	// 		let fileExtension = path.extname(file.originalname);

	// 		if (!acceptedExtensions.includes(fileExtension)) {
	// 			throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
	// 		}
	// 	}

	// 	return true;
	// })
];

module.exports = validationsMiddleware;