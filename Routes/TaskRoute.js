import express from "express";
import { TaskController } from "../Controllers/TaskController.js";

export const TaskRoute = express.Router();

TaskRoute.post("/", TaskController);
