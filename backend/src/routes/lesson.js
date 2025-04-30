const express = require('express');
const router = express.Router();

const lessonController = require('../app/controllers/LessonController');

router.delete('/:id', lessonController.destroy);
router.get('/:id', lessonController.show);
// router.get('/', lessonController.index);
router.post('/', lessonController.store);
router.put('/:id', lessonController.update);


module.exports = router;