require("dotenv").config();
const asyncHandler = require("express-async-handler");
const {
  createPost,
  deleteBlogPost,
  getSinglePost,
  getAll,
} = require("../utils/addPost");

const addPost = asyncHandler(async (req, res, next) => {
  const { file, body } = req;
  if (!file) throw "image upload failed";
  body.image = `${process.env.server_url}covers/${file.originalname}`;
  await createPost(body);
  console.log(body);
  res.status(200).json({ ...body });
});

const removePost = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  const isDeleted = await deleteBlogPost(id);
  if (isDeleted)
    res.status(200).json({
      message: "post deleted",
    });
});

const getAPost = asyncHandler(async (req, res, next) => {
  const { id } = req.query;
  const post = await getSinglePost(id);
  res.status(200).json(post);
});

const fetchAllPosts = asyncHandler(async (req, res, next) => {
  const { query } = req;
  const posts = await getAll(query);
  res.status(200).json(posts);
});
module.exports = {
  addPost,
  removePost,
  getAPost,
  fetchAllPosts,
};
