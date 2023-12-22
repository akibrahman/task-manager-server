import { TaskModel } from "../Models/TaskModel.js";

export const ChangeTaskStatusController = async (req, res) => {
  const id = req.query.id;
  const data = await req.body;
  console.log(id, data);
  try {
    const task = await TaskModel.findOneAndUpdate(
      { _id: id },
      { status: data.status }
    );
    console.log(task);
    res.send(task);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
