const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Result = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quiz_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
    score: { type: Number, required: true },
    submitted_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Result', Result);