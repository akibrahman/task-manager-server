import { TaskModel } from "../Models/TaskModel.js";

export const EditTaskController = async (req, res) => {
  try {
    const id = req.query.id;
    const data = await req.body;
    if (id) {
      const task = await TaskModel.findByIdAndUpdate(id, data);
      res.send(task);
    } else {
      res.send("No Id");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
