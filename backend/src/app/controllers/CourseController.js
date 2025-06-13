const Course = require("../models/Course");
const Lesson = require("../models/Lesson");
const Enrollment = require("../models/Enrollment");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class CourseController {
  async index(req, res, next) {
    try {
      const courses = await Course.find({});
      res.json({
        success: true,
        data: multipleMongooseToObject(courses),
      });
    } catch (err) {
      next(err);
    }
  }

  async show(req, res, next) {
    try {
      const course = await Course.findById({ _id: req.params.id });
      if (!course) {
        return res
          .status(404)
          .json({ success: false, message: "Course not found" });
      }
      res.json({
        success: true,
        data: mongooseToObject(course),
      });
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const course = new Course(req.body);
      const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      if (user.role !== "admin" && user.role !== "instructor") {
        return res.status(403).json({
          success: false,
          message: "Only admin and instructor can create courses",
        });
      }

      await course.save();
      res.status(201).json({
        success: true,
        data: mongooseToObject(course),
      });
    } catch (err) {
      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      if (user.role !== "admin") {
        return res.status(403).json({
          success: false,
          message: "Only admin can create courses",
        });
      }

      const course = await Course.findByIdAndDelete({ _id: req.params.id });
      if (!course) {
        return res
          .status(404)
          .json({ success: false, message: "Course not found" });
      }
      res.json({
        success: true,
        data: mongooseToObject(course),
      });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      if (user.role !== "admin" && user.role !== "instructor") {
        return res.status(403).json({
          success: false,
          message: "Only admin and instructor can create courses",
        });
      }

      const courseId = req.params.id;
      const courseData = req.body;

      const course = await Course.findByIdAndUpdate(courseId, courseData, {
        new: true,
        runValidators: true,
      });
      if (!course) {
        return res
          .status(404)
          .json({ success: false, message: "Course not found" });
      }
      res.json({
        success: true,
        data: mongooseToObject(course),
      });
    } catch (err) {
      next(err);
    }
  }

  async getLessonsByCourse(req, res, next) {
    try {
      const courseID = req.params.id; // Lấy courseId từ params
      const lessons = await Lesson.find({ course_id: courseID });
      if (!lessons) {
        return res
          .status(404)
          .json({ success: false, message: "Lessons not found" });
      }
      res.json({
        success: true,
        data: multipleMongooseToObject(lessons),
      });
    } catch (err) {
      next(err);
    }
  }

  async enroll(req, res, next) {
    try {
      const courseId = req.params.id;
      const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // Kiểm tra nếu user không phải student thì từ chối
      if (user.role !== "student") {
        return res.status(403).json({
          success: false,
          message: "Only students can enroll in courses",
        });
      }

      const course = await Course.findById(courseId);
      if (!course) {
        return res
          .status(404)
          .json({ success: false, message: "Course not found" });
      }

      // Kiểm tra nếu đã có enrollment
      const existed = await Enrollment.findOne({
        user_id: user._id,
        course_id: courseId,
      });
      if (existed) {
        return res.status(400).json({
          success: false,
          message: "You are already enrolled in this course",
        });
      }

      // Tạo mới enrollment
      const enrollment = await Enrollment.create({
        user_id: user._id,
        course_id: courseId,
      });

      res.json({
        success: true,
        data: enrollment,
        message: "Enroll successfully!",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseController();
