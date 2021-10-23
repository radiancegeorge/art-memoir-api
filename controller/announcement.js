const asyncHandler = require("express-async-handler");
const {
  createAnnouncemnt,
  deleteAnnouncement,
  getAnnouncement,
} = require("../utils/announcement");
const makeAnnouncement = asyncHandler(async (req, res, next) => {
  //   console.log(req.body, req.file);
  const { body, file } = req;
  console.log(file.filename);
  const image = `${process.env.server_url}announcement_img/${file.filename}`;

  const isCreated = await createAnnouncemnt({ ...body, image });
  if (!isCreated) throw "Error creating announcement";
  res.status(200).json({ mesage: "announcement Created" });
});

const removeAnnouncement = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  await deleteAnnouncement(id);
  res.status(200).json({ message: "Announcement successfully deleted" });
});

const fetchAnnouncement = asyncHandler(async (req, res, next) => {
  const data = req.query;
  res.status(200).json(await getAnnouncement(data));
});

module.exports = {
  makeAnnouncement,
  removeAnnouncement,
  fetchAnnouncement,
};
