const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.delete('/:id', courseController.destroy);
router.get('/:id', courseController.show);
router.get('/', courseController.index);
router.post('/', courseController.store);
router.put('/:id', courseController.update);


module.exports = router;