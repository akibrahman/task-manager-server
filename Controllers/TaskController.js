import { TaskModel } from "../Models/TaskModel.js";

export const TaskController = async (req, res) => {
  try {
    const task = await req.body;
    const res = await TaskModel.create(task);
    res.send(res);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
