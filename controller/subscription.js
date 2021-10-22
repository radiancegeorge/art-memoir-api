require("dotenv").config();
const axios = require("axios");
const asyncHandler = require("express-async-handler");
const { addSubscriber, removeSubscriber } = require("../utils/subscriber");

const subscribe = asyncHandler(async (req, res, next) => {
  const { unsubscribe } = req.query;
  if (unsubscribe) {
    await removeSubscriber(unsubscribe);
    res.status(200).send({ message: "Successfully unsubscribed" });
    return;
  }
  const { email } = req.body;
  const isAdded = await addSubscriber(email);
  if (isAdded) {
    res.status(200).json({ message: "successful" });
    return;
  }
  next("error with subscription");
});

module.exports = {
  subscribe,
};
