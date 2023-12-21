import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: {
    type: Date,
    required: true,
  },
  priority: String,
});

export const TaskModel = mongoose.model("task", TaskSchema);
