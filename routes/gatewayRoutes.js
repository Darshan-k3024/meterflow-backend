import express from "express";

import {proxyRequest} from "../controllers/gatewayController.js";

import limiter from "../middleware/rateLimiter.js";

const router = express.Router();

// apply rate limit
router.use(limiter);

// gateway handler
router.use(proxyRequest);

export default router;