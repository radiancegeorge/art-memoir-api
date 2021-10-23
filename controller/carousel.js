const asyncHandler = require("express-async-handler");
const {
  carouselSave,
  deleteCarousel,
  getCarousel,
} = require("../utils/carouselSave");

const addImage = asyncHandler(async (req, res, next) => {
  const { file } = req;
  const filename = `${process.env.server_url}carousel/${file.filename}`;
  const message = await carouselSave(filename);
  if (!message) throw "an error occured while uploading image";

  res.status(200).json({ message });
});

const removeImage = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  res.status(200).json({ message: await deleteCarousel(id) });
});

const getImages = asyncHandler(async (req, res, next) => {
  res.status(200).json(await getCarousel());
});

module.exports = {
  addImage,
  removeImage,
  getImages,
};
