// models/sleepLog.js
const mongoose = require('mongoose');
const SleepLogSchema = new mongoose.Schema({
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    date: { type: Date, default: Date now },
    duration: Number,
    quality: String
});

module.exports = mongoose.model('SleepLog', SleepLogSchema);
