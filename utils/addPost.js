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

const getAll = async (data) => {
  const { limit = 10, id, title, page = 1 } = data;
  const offset = (page - 1) * limit;
  const postCount = await Blog_Posts.count({
    where: {
      ...(id && { id }),
      ...(title && {
        title: {
          [Op.like]: `%${title}%`,
        },
      }),
    },
  });
  const totalPages = Math.ceil(postCount / limit);
  const posts = await Blog_Posts.findAll({
    where: {
      ...(id && { id }),
      ...(title && {
        title: {
          [Op.like]: `%${title}%`,
        },
      }),
    },
    limit,
    offset,
    order: [["id", "desc"]],
  });
  return { posts, postCount, currentPage: page, totalPages };
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
