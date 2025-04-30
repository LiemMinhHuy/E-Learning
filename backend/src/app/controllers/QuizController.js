const Quiz = require("../models/Quiz");
const { multipleMongooseToObject } = require("../../util/mongoose");

class QuizController {
  async store(req, res, next) {
    try {
      const quiz = new Course(req.body);
      // const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      // if (user.role !== "admin" && user.role !== "instructor") {
      //   return res.status(403).json({
      //     success: false,
      //     message: "Only admin and instructor can create courses",
      //   });
      // }

      await quiz.save();
      res.status(201).json({
        success: true,
        data: mongooseToObject(quiz),
      });
    } catch (err) {
      next(err);
    }
  }

// Submit quiz
  async submit(req, res, next) {
    try {
      // const user = req.user; // Lấy user từ request (sau khi đã authenticate)

      // // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      // if (user.role !== "admin" && user.role !== "instructor") {
      //   return res.status(403).json({
      //     success: false,
      //     message: "Only admin and instructor can create courses",
      //   });
      // }


    } catch (err) {
      next(err);
    }
  }
  
}

module.exports = new QuizController();
