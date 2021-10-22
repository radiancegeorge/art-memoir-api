const { verifyToken } = require("../utils/encryption.js");
const protect = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).json({ error: "invalid token" });
  const token = authorization.split(" ")[1];
  const data = verifyToken(token);
  if (!data) res.status(401).json({ error: "invalid token" });
  next();
};

module.exports = protect;
