const express = require("express");
const router = express.Router();

router.get("/hello", (_, res) => {
  res.send({ express: "I'm here! 👽👍🏼🔥" });
});

module.exports = router;
