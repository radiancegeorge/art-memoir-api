const express = require("express");
const { contactUs } = require("../controller/mailer");
const contact = express.Router();

contact.post("/", contactUs);

module.exports = contact;
