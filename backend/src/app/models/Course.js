const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  level: { type: String },
  price: { type: Number, required: true },
  thumbnail: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
