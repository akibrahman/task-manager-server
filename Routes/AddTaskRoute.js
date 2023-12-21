import express from "express";
import { AddTaskController } from "../Controllers/AddTaskController.js";

export const AddTaskRoute = express.Router();

AddTaskRoute.post("/", AddTaskController);
