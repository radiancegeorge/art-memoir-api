const asynHandler = require("express-async-handler");
const { newsLetter } = require("../utils/formatMails");
const sendMail = require("../utils/mailer");
const {
  sendToAllSUbscribers,
  getSubscriberCount,
} = require("../utils/sendToAllSUbscribers");

const contactUs = asynHandler(async (req, res, next) => {
  const { body } = req;
  await sendMail({ data: body });
  res.status(200).json({ message: "success" });
});

const bulkMail = asynHandler(async (req, res, next) => {
  const file = req.file;
  //address this when email templates ready
  let barner;
  if (file) {
    barner = `${process.env.server_url}covers/${file.originalname}`;
    req.body.barner = barner;
  }
  console.log(req.body);

  let sendStatus;
  try {
    sendStatus = await sendToAllSUbscribers(newsLetter(req.body));
  } catch (err) {
    throw "error sending mail";
  }
  sendStatus && res.status(200).json({ message: "success" });
});
const getCount = asynHandler(async (req, res, next) => {
  res.status(200).json({ count: await getSubscriberCount() });
});
module.exports = {
  contactUs,
  bulkMail,
  getCount,
};
