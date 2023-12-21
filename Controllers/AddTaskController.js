import { TaskModel } from "../Models/TaskModel.js";

export const AddTaskController = async (req, res) => {
  try {
    const task = await req.body;
    const result = await TaskModel.create(task);
    res.send(result);
  } catch (error) {
    res.status(400).send("Internal Server Error");
  }
};
