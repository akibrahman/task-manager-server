import express from "express";
import { UserController } from "../Controllers/UserController.js";

const router = express.Router();

router.put("/", UserController);

export default router;
