const Lesson = require("../models/Lesson");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class LessonController {
  // async index(req, res, next) {
  //   try {
  //     const lessons = await Lesson.find({});
  //     res.json({
  //       success: true,
  //       data: multipleMongooseToObject(lessons),
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  async show(req, res, next) {
    try {
      const lesson = await Lesson.findById({ _id: req.params.id });
      if (!lesson) {
        return res
          .status(404)
          .json({ success: false, message: "Lesson not found" });
      }
      res.json({
        success: true,
        data: mongooseToObject(lesson),
      });
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const lesson = new Lesson(req.body);
      // const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      // if (user.role !== "admin" && user.role !== "instructor") {
      //   return res.status(403).json({
      //     success: false,
      //     message: "Only admin and instructor can create Lessons",
      //   });
      // }

      await lesson.save();
      res.status(201).json({
        success: true,
        data: mongooseToObject(lesson),
      });
    } catch (err) {
      next(err);
    }
  }

  async destroy(req, res, next) {
    try {
      // const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      // if (user.role !== "admin") {
      //   return res.status(403).json({
      //     success: false,
      //     message: "Only admin can create Lessons",
      //   });
      // }

      const lesson = await Lesson.findByIdAndDelete({ _id: req.params.id });
      if (!Lesson) {
        return res
          .status(404)
          .json({ success: false, message: "Lesson not found" });
      }
      res.json({
        success: true,
        data: mongooseToObject(lesson),
      });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      // const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      // if (user.role !== "admin" && user.role !== "instructor") {
      //   return res.status(403).json({
      //     success: false,
      //     message: "Only admin and instructor can create Lessons",
      //   });
      // }

      const LessonId = req.params.id;
      const LessonData = req.body;

      const lesson = await Lesson.findByIdAndUpdate(LessonId, LessonData, {
        new: true,
        runValidators: true,
      });
      if (!lesson) {
        return res
          .status(404)
          .json({ success: false, message: "Lesson not found" });
      }
      res.json({
        success: true,
        data: mongooseToObject(lesson),
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new LessonController();
