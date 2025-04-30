const User = require("../models/User");
const bcrypt = require('bcrypt');
const { multipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");

class AuthController {
  // ========================= REGISTER =========================
  async register(req, res, next) {
    try {
      const { firstname, lastname, email, password, phoneNumber } = req.body;

      // Validate required fields
      if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please fill in all required fields.",
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address.",
        });
      }

      // Validate password length
      if (password.length < 6) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 6 characters long.",
        });
      }

      // Validate password confirmation
      if (password !== req.body.confirmPassword) {
        return res.status(400).json({
          success: false,
          message: "Passwords do not match.",
        });
      }

      // Validate phone number format if provided
      if (phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
          return res.status(400).json({
            success: false,
            message: "Please enter a valid 10-digit phone number.",
          });
        }
      }

      // Check if email already exists
      const checkUserAlreadyExists = await User.findOne({email});
      if (checkUserAlreadyExists) {
        return res.status(400).json({
          success: false,
          message: "Email already exists.",
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user data
      const userData = {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phoneNumber,
      };

      // Create and save new user
      const newUser = new User(userData);
      await newUser.save();

      // Remove password from response
      const userResponse = { ...userData };
      delete userResponse.password;

      res.status(201).json({
        success: true,
        message: "Registration successful",
        data: mongooseToObject(newUser)
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
