const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');
const authController = require('../app/controllers/AuthController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', isAuthenticated, authController.getProfile);
router.patch('/update', isAuthenticated, authController.update);
router.delete('/delete', isAuthenticated, authController.delete);

module.exports = router;