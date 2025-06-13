const express = require('express');
const router = express.Router();

const categoryController = require('../app/controllers/CategoryController');

router.get('/', categoryController.index);
router.get('/:id/courses', categoryController.getCoursesByCategory);

module.exports = router;