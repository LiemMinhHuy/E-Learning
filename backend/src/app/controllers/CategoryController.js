const Category = require("../models/Category");
const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CategoryController {
  async index(req, res, next) {
    try {
      const categories = await Category.find({});
      res.json({
        success: true,
        data: multipleMongooseToObject(categories),
      });
    } catch (err) {
        next(err);
    }
  }

  async getCoursesByCategory(req, res, next) {  
    const category_id = req.params.id; 
    try {
      const courses = await Course.find({ categoryId: category_id });
      if (!courses || courses.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No courses found for this category",
        });
      }
      res.json({
        success: true,
        data: multipleMongooseToObject(courses),
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CategoryController();
