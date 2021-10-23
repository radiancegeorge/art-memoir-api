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
  .post("/new_post", protect, uploads.single("cover"), addPost)
  .get("/all_posts", fetchAllPosts)
  .get("/single", getAPost)
  .post("/delete", protect, removePost);

module.exports = posts;
