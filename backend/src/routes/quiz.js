const express = require('express');
const router = express.Router();

const quizController = require('../app/controllers/QuizController');

// Quiz routes
router.post('/', quizController.store);
router.post('/', quizController.submit);


module.exports = router;