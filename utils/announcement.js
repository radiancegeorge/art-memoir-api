const { Announcement } = require("../models");
const createAnnouncemnt = async (data) => {
  console.log("got here", data);
  //   console.log(data);
  const properties = ["image", "content", "title"];
  properties.forEach((item) => {
    console.log(data[item]);
    !data[item] && throwErr(item);
  });

  const createdData = await Announcement.create(data);
  return createdData ? true : false;
};

const throwErr = (item) => {
  throw `${item} cannot be empty!! `;
};

const getAnnouncement = async (data) => {
  const { limit = 10, id, title, page = 1 } = data;
  const offset = (page - 1) * limit;
  const announcementCount = await Announcement.count({
    where: {
      ...(id && { id }),
      ...(title && {
        title: {
          [Op.like]: `%${title}%`,
        },
      }),
    },
  });
  const totalPages = Math.ceil(announcementCount / limit);
  const announcements = await Announcement.findAll({
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
  return { announcements, announcementCount, currentPage: page, totalPages };
};

const deleteAnnouncement = async (id) => {
  await Announcement.destroy({
    where: {
      id,
    },
  });
  return true;
};

module.exports = {
  deleteAnnouncement,
  createAnnouncemnt,
  getAnnouncement,
};
