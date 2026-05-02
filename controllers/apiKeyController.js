import ApiKey from "../models/ApiKey.js";
import { generateApiKey } from "../utils/generateApiKey.js";

// Generate API Key
export const createApiKey = async (req, res) => {
  try {
    const { apiId } = req.body;

    const key = generateApiKey();

    const apiKey = await ApiKey.create({
      apiId,
      key
    });

    res.json(apiKey);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const revokeApiKey = async (req, res) => {

  try {

    const { keyId } = req.body;

    const updatedKey = await ApiKey.findByIdAndUpdate(

      keyId,

      {
        status: "revoked"
      },

      {
        new: true
      }

    );

    res.json(updatedKey);

  }

  catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }

};

export const getAllKeys = async (req, res) => {

  try {

    const keys = await ApiKey.find();

    res.json(keys);

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }

};