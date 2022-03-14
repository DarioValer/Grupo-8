const express = require('express');
const router = express.Router();

const usersControllerApi = require('../../controllers/api/usersApi');

// ************ Lista completa de usuarios ************ 
router.get('/', usersControllerApi.users)
// ************ Consultar detalles de un usuario en particular ************ 
router.get('/:id', usersControllerApi.usersDetail)



module.exports = router;