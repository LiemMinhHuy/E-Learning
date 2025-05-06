const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/auth");
const courseController = require("../app/controllers/CourseController");

router.get("/:id", courseController.show);
router.get("/", courseController.index);
router.get("/:id/lessons", courseController.getLessonsByCourse);
router.post("/", isAuthenticated, courseController.store);
router.put("/:id", isAuthenticated, courseController.update);
router.delete("/:id", isAuthenticated, courseController.destroy);

module.exports = router;
