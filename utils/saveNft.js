const { Op } = require("sequelize");
const { Nfts } = require("../models");

const saveNft = async (data) => {
  //   console.log(data);
  const properties = ["image", "link", "title", "description"];
  properties.forEach((item) => {
    console.log(data[item]);
    !data[item] && throwErr(item);
  });

  const createdData = await Nfts.create(data);
  console.log("got here", createdData);
  return createdData ? true : false;
};

const deleteNft = async (id) => {
  await Nfts.destroy({
    where: {
      id,
    },
  });
  return true;
};
const throwErr = (item) => {
  throw `${item} cannot be empty!! `;
};

const getNfts = async (data) => {
  const { limit = 10, id, title, page = 1 } = data;
  const offset = (page - 1) * limit;
  const nftCount = await Nfts.count({
    where: {
      ...(id && { id }),
      ...(title && {
        title: {
          [Op.like]: `%${title}%`,
        },
      }),
    },
  });
  const totalPages = Math.ceil(nftCount / limit);
  const nfts = await Nfts.findAll({
    where: {
      ...(id && { id }),
      ...(title && {
        title: {
          [Op.like]: `%${title}%`,
        },
      }),
    },
    limit,
    offset,
    order: [["id", "desc"]],
  });
  return { nfts, nftCount, currentPage: page, totalPages };
};

module.exports = {
  saveNft,
  deleteNft,
  getNfts,
};
