import API from "../models/API.js";

// Create API
export const createAPI = async (req, res) => {
  try {
    const { name, baseUrl } = req.body;

    const api = await API.create({
      name,
      baseUrl,
      userId: req.user.id
    });

    res.json(api);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

