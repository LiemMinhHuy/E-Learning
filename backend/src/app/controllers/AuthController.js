const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { mongooseToObject } = require("../../util/mongoose");

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
      const checkUserAlreadyExists = await User.findOne({ email });
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
        data: mongooseToObject(newUser),
      });
    } catch (err) {
      next(err);
    }
  }

  // ========================= LOGIN =========================
  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      // Validate input
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please provide both email and password",
        });
      }

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Generate JWT token
      const tokenData = {
        id: user._id,
        email: user.email,
        role: user.role,
        firstname: user.firstname,
        lastname: user.lastname,
      };

      const accessToken = jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_LIFE,
      });

      // Remove password from response
      const userResponse = mongooseToObject(user);
      delete userResponse.password;

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          user: userResponse,
          accessToken,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      next(error);
    }
  }

  getProfile(req, res, next) {
    try {
      const user = req.user; // Assuming user is set in the request by middleware

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Remove password from response
      const userResponse = mongooseToObject(user);
      delete userResponse.password;

      return res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        data: userResponse,
      });

    } catch (error) {
      console.error("Get profile error:", error);
      next(error);
    }
  }
}

module.exports = new AuthController();
