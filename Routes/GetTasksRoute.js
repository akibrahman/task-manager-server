import express from "express";
import { GetTasksController } from "../Controllers/GetTasksController.js";

export const GetTasksRoute = express.Router();

GetTasksRoute.get("/", GetTasksController);
