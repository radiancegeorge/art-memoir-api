const { Subscribers } = require("../models");
const { Op } = require("sequelize");
const addSubscriber = async (payload) => {
  await Subscribers.create({
    email: payload,
  });

  return true;
};

const removeSubscriber = async (payload) => {
  await Subscribers.destroy({
    where: {
      [Op.or]: [{ id: payload }, { email: payload }],
    },
  });
  return true;
};

module.exports = {
  addSubscriber,
  removeSubscriber,
};
