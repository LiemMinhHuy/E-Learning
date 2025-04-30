const Category = require("../models/Category");
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
}

module.exports = new CategoryController();
