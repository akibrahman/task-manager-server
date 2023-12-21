import { TaskModel } from "../Models/TaskModel.js";

export const GetTasksController = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};
