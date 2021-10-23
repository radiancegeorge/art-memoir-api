const express = require("express");
const {
  addPost,
  fetchAllPosts,
  getAPost,
  removePost,
} = require("../controller/addPost");
const { uploads } = require("../middleware/multer");
const protect = require("../middleware/protect");
const posts = express.Router();

posts
  .route("/")
  .post(protect, uploads.single("cover"), addPost)
  .get(fetchAllPosts)
  .delete(protect, removePost);

posts.route("/single").get(getAPost);
module.exports = posts;
