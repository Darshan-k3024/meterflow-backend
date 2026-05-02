import mongoose from "mongoose";

const apiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  baseUrl: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

export default mongoose.model("API", apiSchema);