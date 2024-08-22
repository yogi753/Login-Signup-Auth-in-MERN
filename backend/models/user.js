const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    count: { type: Number, default: 1 },
    lastLoginDate: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
