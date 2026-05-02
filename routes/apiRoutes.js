import express from "express";
import { createAPI } from "../controllers/apiController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createAPI);

export default router;