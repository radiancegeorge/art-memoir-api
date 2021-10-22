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

module.exports = uploads;
