import UsageLog from "../models/UsageLog.js";

export const getLogs = async (req, res) => {

  try {

    const logs = await UsageLog.find()
      .sort({ createdAt: -1 });

    res.status(200).json(logs);

  }

  catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }

};