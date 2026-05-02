import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import apiRoutes from "./routes/apiRoutes.js";
import apiKeyRoutes from "./routes/apiKeyRoutes.js";
import billingRoutes from "./routes/billingRoutes.js";
import gatewayRoutes from "./routes/gatewayRoutes.js";
import logRoutes from "./routes/logRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/api", apiRoutes);
app.use("/api/key", apiKeyRoutes);
app.use("/api/gateway", gatewayRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/logs",logRoutes)
app.use("/api/key", apiKeyRoutes);
app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

