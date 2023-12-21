import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import IndexRoute from "./Routes/IndexRoute.js";
import UsersRoute from "./Routes/UsersRoute.js";

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
app.use("/manage-users", UsersRoute);

app.listen(port, () => {
  console.log(`Task Management System is Running on Port - ${port}`);
});
