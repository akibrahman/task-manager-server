import express from "express";
import { GetTaskController } from "../Controllers/GetTaskController.js";

export const GetTaskRoute = express.Router();

GetTaskRoute.get("/", GetTaskController);
