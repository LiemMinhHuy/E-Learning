const { multipleMongooseToObject } = require("../../util/mongoose");
const Course = require('../models/Course');

class SiteController {
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json({
        status: 'success',
        data: multipleMongooseToObject(courses)
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
      });
    }
  }

  search(req, res) {
    res.json({
      status: 'success',
      message: 'Search API endpoint'
    });
  }
}

module.exports = new SiteController();
