import UsageLog from "../models/UsageLog.js";
import Billing from "../models/Billing.js";
import User from "../models/user.js";


export const getUsage = async (req, res) => {

  try {

    
    const totalRequests = await UsageLog.countDocuments();

    
    const pricePerRequest = 2;

    const totalBill = totalRequests * pricePerRequest;

    res.status(200).json({
      totalRequests,
      pricePerRequest,
      totalBill
    });

  } catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }

};


// create bill
export const createBill = async (req, res) => {

  try {

    const { userId } = req.body;

    // count requests
    const totalRequests =
      await UsageLog.countDocuments();

    // pricing logic
    const pricePerRequest = 2;

    const amount =
      totalRequests * pricePerRequest;

    // save bill
    const bill = await Billing.create({

      userId,

      totalRequests,

      amount,

      status: "pending"

    });

    res.status(201).json(bill);

  }

  catch (err) {

    res.status(500).json({
      msg: err.message
    });

  }

};