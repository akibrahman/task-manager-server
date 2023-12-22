import express from "express";
import { GetUserController } from "../Controllers/GetUserController.js";

export const GetUserRoute = express.Router();

GetUserRoute.get("/", GetUserController);
