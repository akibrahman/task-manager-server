import express from "express";
import { EditTaskController } from "../Controllers/EditTaskController.js";

export const EditTaskRoute = express.Router();

EditTaskRoute.patch("/", EditTaskController);
