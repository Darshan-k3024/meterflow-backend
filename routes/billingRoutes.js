import express from "express";
import {getUsage,createBill} from "../controllers/billingController.js";

const router = express.Router();

router.get("/usage", getUsage);
router.post("/create", createBill);

export default router;
