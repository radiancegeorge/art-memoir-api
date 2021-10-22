const express = require("express");
const login = require("../controller/admin");
const admin = express.Router();

admin.post("/login", login);
module.exports = admin;
