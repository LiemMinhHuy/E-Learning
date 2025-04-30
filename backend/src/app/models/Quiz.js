const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quiz = new Schema({
    lesson_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson', required: true },
    title: { type: String, required: true },
    questions: { type: Schema.Types.Mixed, required: true }
});

module.exports = mongoose.model('Quiz', Quiz);