import express from "express";
import { DeleteTaskController } from "../Controllers/DeleteTaskController.js";

export const DeleteTaskRoute = express.Router();

DeleteTaskRoute.delete("/", DeleteTaskController);
