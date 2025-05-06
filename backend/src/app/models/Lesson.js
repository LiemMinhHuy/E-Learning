const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Lesson = new Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  title: { type: String, required: true },
  video_url: { type: String, required: true },
  duration: { type: String },
  content: { type: String },
  order: { type: Number, required: true },
});

module.exports = mongoose.model("Lesson", Lesson);
