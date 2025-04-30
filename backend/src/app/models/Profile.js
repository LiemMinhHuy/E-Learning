const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    bio: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Profile', Profile);