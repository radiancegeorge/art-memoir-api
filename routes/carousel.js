const { getImages, addImage, removeImage } = require("../controller/carousel");
const { carouselStore } = require("../middleware/multer");
const protect = require("../middleware/protect");

const carousel = require("express").Router();

carousel
  .route("/")
  .get(getImages)
  .post(protect, carouselStore.single("image"), addImage)
  .delete(protect, removeImage);

module.exports = carousel;
