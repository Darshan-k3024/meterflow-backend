import mongoose from "mongoose";

const usageLogSchema = new mongoose.Schema({

  apiKey: String,

  endpoint: String,

  method: String,

  statusCode: Number

},
{
  timestamps: true
});

const UsageLog = mongoose.model(
  "UsageLog",
  usageLogSchema
);

export default UsageLog;