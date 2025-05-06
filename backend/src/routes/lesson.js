const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/auth");
const lessonController = require("../app/controllers/LessonController");

router.get("/course/:courseID", lessonController.index);
router.get("/:id", lessonController.show);
router.post("/", isAuthenticated, lessonController.store);
router.put("/:id", isAuthenticated, lessonController.update);
router.delete("/:id", isAuthenticated, lessonController.destroy);

module.exports = router;
