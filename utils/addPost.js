const { Blog_Posts } = require("../models");
const addPost = async (data) => {
  await Blog_Posts.create(data);
  return true;
};
const deleteBlogPost = async (id) => {
  await Blog_Posts.destroy({
    where: {
      id,
    },
  });
  return true;
};

const getAll = async ({ limit, page }) => {
  let offset;
  let maxPage;
  let totalPosts;
  if (page) {
    limit = limit || 1;
    totalPosts = await Blog_Posts.count();
    maxPage = totalPosts / Number(page);
  }
  const all = await Blog_Posts.findAll({
    limit,
    offset,
  });
  return all;
};

const getSinglePost = async (id) => {
  return await Blog_Posts.findOne({ where: { id } });
};

module.exports = {
  createPost: addPost,
  deleteBlogPost,
  getAll,
  getSinglePost,
};
