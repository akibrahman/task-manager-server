import { TaskModel } from "../Models/TaskModel.js";

export const GetTasksController = async (req, res) => {
  const email = req.query.email;
  if (email) {
    const tasks = await TaskModel.find({ user: email });
    res.send(tasks);
  } else {
    res.send("No User Identified");
  }
};
