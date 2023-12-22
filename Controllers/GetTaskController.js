import { TaskModel } from "../Models/TaskModel.js";

export const GetTaskController = async (req, res) => {
  const id = req.query.id;
  if (id) {
    const task = await TaskModel.findById(id);
    res.send(task);
  } else {
    res.send("No ID");
  }
};
