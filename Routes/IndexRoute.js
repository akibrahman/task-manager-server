import express from "express";
import { IndexController } from "../Controllers/IndexController.js";

const router = express.Router();

router.get("/", IndexController);

export default router;
