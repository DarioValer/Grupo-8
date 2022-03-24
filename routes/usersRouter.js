const express = require('express');
const path = require('path')

// ************ Middlewares ************ 

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const uploadAvatar = require('../middlewares/multerMiddleware')
const router = express.Router();
const usersController = require('../controllers/usersController')
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const validationsMiddleware = require('../middlewares/validationsMiddleware');

//************ Login ************ 
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', userLoggedMiddleware, validationsMiddleware, usersController.loginProcess);
router.get('/profile', authMiddleware, usersController.profile)
router.get('/profileToEdit/:id', authMiddleware, usersController.edit)
router.put('/profileToEdit/:id', authMiddleware, uploadAvatar.any(), usersController.update)
router.get('/logout',  usersController.logout)
//************ Register ************ 
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadAvatar.any('avatar'), validationsMiddleware, usersController.processRegister);




module.exports = router;