const Quiz = require("../models/Quiz");
const Result = require("../models/Result");
const { mongooseToObject, multipleMongooseToObject } = require("../../util/mongoose");

class QuizController {
  // GET /quiz 
  async index(req, res, next) {
    try {
      const quizzes = await Quiz.find({}).populate('course');
      res.json({
        success: true,
        data: multipleMongooseToObject(quizzes),
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Error retrieving quizzes",
        error: err.message
      });
    }
  }

  // POST /quiz
  // Create a new quiz
  async store(req, res, next) {
    try { 
      const user = req.user;

      // Kiểm tra nếu user không phải admin hoặc instructor thì từ chối
      if (user.role !== "admin" && user.role !== "instructor") {
        return res.status(403).json({
          success: false,
          message: "Only admin and instructor can create quizzes",
        });
      }

      const quiz = new Quiz({
        ...req.body,
        creator: user._id
      });

      await quiz.save();
      res.status(201).json({
        success: true,
        message: "Quiz created successfully",
        data: mongooseToObject(quiz),
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Error creating quiz",
        error: err.message
      });
    }
  }

  // POST /quiz/submit/:id
  async submit(req, res, next) {
    try {
      const user = req.user;
      const quizId = req.params.id;
      const { answers } = req.body;

      // Kiểm tra nếu user không phải là student thì từ chối
      if (user.role !== "student") {
        return res.status(403).json({
          success: false,
          message: "Only students can submit quizzes",
        });
      }

      // Validate quiz exists
      const quiz = await Quiz.findById(quizId);
      if (!quiz) {
        return res.status(404).json({
          success: false,
          message: "Quiz not found"
        });
      }

      // Check if student has already submitted
      const existingResult = await Result.findOne({
        user: user._id,
        quiz: quizId
      });

      if (existingResult) {
        return res.status(400).json({
          success: false,
          message: "You have already submitted this quiz"
        });
      }

      // Calculate score
      let score = 0;
      quiz.questions.forEach((question, index) => {
        if (answers[index] === question.correctAnswer) {
          score++;
        }
      });

      // Create result
      const result = new Result({
        user: user._id,
        quiz: quizId,
        answers: answers,
        score: score,
        totalQuestions: quiz.questions.length
      });

      await result.save();

      res.json({
        success: true,
        message: "Quiz submitted successfully",
        data: mongooseToObject(result)
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Error submitting quiz",
        error: err.message
      });
    }
  }
}

module.exports = new QuizController();
