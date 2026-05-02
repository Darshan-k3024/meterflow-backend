import rateLimit from "express-rate-limit";

const limiter = rateLimit({

  // 1 minute
  windowMs: 60 * 1000,

  // max requests
  max: 5,

  message: {
    msg: "Rate limit exceeded"
  },

  standardHeaders: true,

  legacyHeaders: false

});

export default limiter;