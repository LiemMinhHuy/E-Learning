const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coupon = new Schema({
    code: { type: String, required: true, unique: true },
    discount: { type: Number, required: true },
    valid_from: { type: Date, required: true },
    valid_to: { type: Date, required: true },
    usage_limit: { type: Number }
});

module.exports = mongoose.model('Coupon', Coupon);