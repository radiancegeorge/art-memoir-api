const { Subscribers } = require("../models");
const sendMail = require("./mailer");

const sendToAllSUbscribers = async (data) => {
  const total = await getSubscriberCount();
  if (!total) throw "no subscriber found";
  const subscribers = await Subscribers.findAll();

  const promise = await new Promise((resolve, reject) => {
    try {
      subscribers.forEach(async (mail) => {
        console.log(mail.dataValues.email);
        await sendMail({ to: mail.dataValues.email, data });
        subscribers.length === subscribers.indexOf(mail) + 1 && resolve(true);
      });
    } catch (error) {
      throw error;
    }
  });
  return await promise;
};

const getSubscriberCount = async () => {
  return await Subscribers.count();
};

module.exports = {
  getSubscriberCount,
  sendToAllSUbscribers,
};
