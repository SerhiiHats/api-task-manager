import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        description: { type: String, require: true },
        completed: { type: Boolean, default: false },
        createBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

export const Task = mongoose.model('Task', taskSchema);

