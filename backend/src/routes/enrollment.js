const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth');
const enrollmentController = require('../app/controllers/EnrollmentController');
// Enrollment routes
router.post('/', isAuthenticated, enrollmentController.store); // Create a new enrollment

module.exports = router;