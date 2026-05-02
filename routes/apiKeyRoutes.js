import express from "express";
import { createApiKey,revokeApiKey,getAllKeys } from "../controllers/apiKeyController.js";
import authMiddleware from "../middleware/authMiddleware.js";



const router = express.Router();

router.post("/generate", authMiddleware, createApiKey);
router.put("/revoke", authMiddleware, revokeApiKey);
router.get("/keys", getAllKeys);

export default router;