const { Carousel } = require("../models");
const maxCount = 10;
const carouselSave = async (image) => {
  const count = await Carousel.count();
  console.log(" in here", count);
  if (count >= maxCount) {
    throw "images have been exceeded, please delete then try again";
  }
  if (!image) throw "image cannot be empty";
  await Carousel.create({
    image,
  });
  return "Image has been successfully added!";
};

const getCarousel = async () => {
  return await Carousel.findAll({
    order: [["id", "desc"]],
  });
};

const deleteCarousel = async (id) => {
  await Carousel.destroy({ where: { id } });
  return "image deleted";
};
module.exports = {
  carouselSave,
  getCarousel,
  deleteCarousel,
};
