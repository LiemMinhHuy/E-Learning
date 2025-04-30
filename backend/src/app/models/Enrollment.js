const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Enrollment = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    enrolled_at: { type: Date, default: Date.now },
    progress: { type: Number, default: 0 },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Enrollment', Enrollment);