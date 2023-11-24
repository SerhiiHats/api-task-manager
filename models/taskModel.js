const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        text: { type: String, require: true },
        isCompleted: { type: Boolean, default: false },
        createBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = {
    Task,
};
