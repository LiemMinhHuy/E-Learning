const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const { mongooseToObject } = require("../../util/mongoose");

class EnrollmentController {
  // POST /enrollment
  // Create a new enrollment
  async store(req, res, next) {
    try {
      const { courseId } = req.body;

      // Validate courseId
      if (!courseId) {
        return res.status(400).json({
          success: false,
          message: "Course ID is required",
        });
      }

      const user = req.user;
      
      // Validate user exists
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not authenticated",
        });
      }

      // Check user role
      if (user.role !== 'student') {
        return res.status(403).json({
          success: false, 
          message: "Only students can enroll in courses"
        });
      }

      // Check if course exists
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      // Check if user is already enrolled
      const existingEnrollment = await Enrollment.findOne({
        user_id: user._id,
        course_id: courseId,
      });

      if (existingEnrollment) {
        return res.status(400).json({
          success: false,
          message: "You are already enrolled in this course",
        });
      }

      // Create new enrollment
      const enrollment = new Enrollment({
        user_id: user._id,
        course_id: courseId,
        enrolled_at: new Date(),
        progress: 0,
        completed: false
      });

      await enrollment.save();

      res.status(201).json({
        success: true,
        message: "Successfully enrolled in the course",
        data: mongooseToObject(enrollment),
      });
    } catch (err) {
      console.error("Enrollment error:", err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: err.message
      });
    }
  }
}

module.exports = new EnrollmentController();
