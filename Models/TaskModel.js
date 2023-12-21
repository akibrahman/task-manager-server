import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: {
    type: Date,
    required: true,
  },
  priority: String,
  status: {
    type: String,
    default: "toDo",
  },
});

export const TaskModel = mongoose.model("task", TaskSchema);
