const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads/"),
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const uploads = multer({
  storage: storage,
});

const nftStorage = multer.diskStorage({
  destination: path.join(__dirname, "../nftStore/"),
  filename: (req, file, cb) => {
    cb(null, `nft_${Date.now()}_${file.originalname}`);
  },
});

const nftStore = multer({
  storage: nftStorage,
});
const carouselStorage = multer.diskStorage({
  destination: path.join(__dirname, "../carousel/"),
  filename: (req, file, cb) => {
    cb(null, `carousel_${Date.now()}_${file.originalname}`);
  },
});

const carouselStore = multer({
  storage: carouselStorage,
});
const announcementStorage = multer.diskStorage({
  destination: path.join(__dirname, "../announcement/"),
  filename: (req, file, cb) => {
    cb(null, `announcement_${Date.now()}_${file.originalname}`);
  },
});

const announcementStore = multer({
  storage: announcementStorage,
});

module.exports = { uploads, nftStore, carouselStore, announcementStore };
