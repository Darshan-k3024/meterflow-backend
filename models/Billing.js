import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  totalRequests: {
    type: Number,
    default: 0
  },

  amount: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    enum: ["pending", "paid"],
    default: "pending"
  }

}, {
  timestamps: true
});

export default mongoose.model(
  "Billing",
  billingSchema
);