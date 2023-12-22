import express from "express";
import { ChangeTaskStatusController } from "../Controllers/ChangeTaskStatusController.js";

export const ChangeTaskStatusRoute = express.Router();

ChangeTaskStatusRoute.put("/", ChangeTaskStatusController);
