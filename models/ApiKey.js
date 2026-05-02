import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema({
  apiId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "API"
  },
  key: {
    type: String
  },
  status: {
    type: String,
    default: "active"
  }
}, { timestamps: true });

export default mongoose.model("ApiKey", apiKeySchema);