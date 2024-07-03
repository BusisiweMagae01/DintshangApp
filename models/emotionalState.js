// models/emotionalState.js
const mongoose = require('mongoose');
const EmotionalStateSchema = new mongoose.Schema({
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    date: { type: Date, default: Date now },
    state: String
});

module.exports = mongoose.model('EmotionalState', EmotionalStateSchema);
