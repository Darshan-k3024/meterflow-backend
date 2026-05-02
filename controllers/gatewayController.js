import ApiKey from "../models/ApiKey.js";
import API from "../models/API.js";
import UsageLog from "../models/UsageLog.js";
import axios from "axios";

export const proxyRequest = async (req, res) => {

  try {

    // get api key
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
      return res.status(401).json({
        msg: "API key missing"
      });
    }

    // validate key
    const keyDoc = await ApiKey.findOne({
      key: apiKey,
       status: "active"
    });

    if (!keyDoc) {
      return res.status(403).json({
        msg: "Invalid API key"
      });
    }

    // get api
    const api = await API.findById(keyDoc.apiId);

    if (!api) {
      return res.status(404).json({
        msg: "API not found"
      });
    }

    // forward request
    const response = await axios({

      method: req.method,

      url:
        api.baseUrl +
        req.originalUrl.replace("/api/gateway", ""),

      data: req.body

    });

    // save log
    await UsageLog.create({

      apiKey,

      endpoint: req.originalUrl,

      method: req.method,

      statusCode: response.status

    });

    res.status(response.status)
      .json(response.data);

  }

  catch (err) {

    await UsageLog.create({

      apiKey: req.headers["x-api-key"],

      endpoint: req.originalUrl,

      method: req.method,

      statusCode: 500

    });

    res.status(500).json({
      msg: err.message
    });

  }

};