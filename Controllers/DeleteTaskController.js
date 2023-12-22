import { TaskModel } from "../Models/TaskModel.js";

export const DeleteTaskController = async (req, res) => {
  const id = req.query.id;
  if (id) {
    await TaskModel.findByIdAndDelete(id);
    res.send("Deleted");
  } else {
    res.send("No Id");
  }
};
