const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');
const authController = require('../app/controllers/AuthController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', isAuthenticated, authController.getProfile);

module.exports = router;