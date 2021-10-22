const asyncHandler = require("express-async-handler");
const { genToken, textCheck } = require("../utils/encryption");

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const isAdmin = await textCheck(email.toLowerCase(), password);
  if (!isAdmin) {
    res.status(401).json({ error: "unauthorised" });
    return;
  }
  const token = genToken();
  res.status(200).json(token);
});

module.exports = login;
