const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const quizController = require('../app/controllers/QuizController');

// Quiz routes
router.get('/', quizController.index); // Get all quizzes
router.post('/', auth, quizController.store); // Create new quiz
router.post('/submit/:id', auth, quizController.submit); // Submit quiz answers

module.exports = router;