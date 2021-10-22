require("dotenv").config();
const { admin_email, admin_password } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const textCheck = async (email, password) => {
  const isAdminMail = await bcrypt.compare(email, admin_email);
  const isAdminPassword = await bcrypt.compare(password, admin_password);
  if (isAdminMail && isAdminPassword) return true;
  return false;
};

const genToken = () => {
  const token = jwt.sign(
    {
      admin_email,
      admin_password,
    },
    admin_password
  );
  return token;
};
const verifyToken = (token) => {
  const data = jwt.verify(token, admin_password);
  if (!data) throw "invalid token";
  const { admin_email: email, admin_password: password } = data;
  if (password === admin_password && email === admin_email) return true;
  return false;
};
module.exports = {
  textCheck,
  genToken,
  verifyToken,
};
