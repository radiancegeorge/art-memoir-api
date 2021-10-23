const {
  fetchAnnouncement,
  makeAnnouncement,
  removeAnnouncement,
} = require("../controller/announcement");
const { announcementStore } = require("../middleware/multer");
const protect = require("../middleware/protect");

const announcement = require("express").Router();

announcement
  .route("/")
  .get(fetchAnnouncement)
  .post(protect, announcementStore.single("image"), makeAnnouncement)
  .delete(protect, removeAnnouncement);

module.exports = announcement;
