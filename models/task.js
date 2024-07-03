// models/task.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    title: String,
    description: String,
    dueDate: Date,
    reminders: [Date],
    timeSpent: Number
});

module.exports = mongoose.model('Task', TaskSchema);
