import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { AddTaskRoute } from "./Routes/AddTaskRoute.js";
import { ChangeTaskStatusRoute } from "./Routes/ChangeTaskStatusRoute.js";
import { DeleteTaskRoute } from "./Routes/DeleteTaskRoute.js";
import { GetTasksRoute } from "./Routes/GetTasksRoute.js";
import { GetUserRoute } from "./Routes/GetUserRoute.js";
import IndexRoute from "./Routes/IndexRoute.js";
import UserRoute from "./Routes/UserRoute.js";

const app = express();
const port = process.env.PORT || 8000;

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bfs9yhw.mongodb.net/?retryWrites=true&w=majority`,
  { dbName: process.env.DB_NAME }
);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      // "https://mealmaster-akib.web.app",
      // "https://mealmaster-akib.firebaseapp.com",
    ],
    //   credentials: true,
    //   optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("/", IndexRoute);
app.use("/get-user", GetUserRoute);
app.use("/manage-users", UserRoute);
app.use("/add-task", AddTaskRoute);
app.use("/delete-task", DeleteTaskRoute);
app.use("/get-tasks", GetTasksRoute);
app.use("/change-task-status", ChangeTaskStatusRoute);

app.listen(port, () => {
  console.log(`Task Management System is Running on Port - ${port}`);
});
