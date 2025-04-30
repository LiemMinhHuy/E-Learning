const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', Review);