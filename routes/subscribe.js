const express = require("express");
const { subscribe } = require("../controller/chimp");
const { getCount, bulkMail } = require("../controller/mailer");
const uploads = require("../middleware/multer");
const protect = require("../middleware/protect");
const subscribeRoute = express.Router();
subscribeRoute
  .post("/", subscribe)
  .get("/count", protect, getCount)
  .post("/pushBulkMail", protect, uploads.single("cover"), bulkMail);
module.exports = subscribeRoute;
