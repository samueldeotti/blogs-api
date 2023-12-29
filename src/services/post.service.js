const Sequelize = require('sequelize');
const { BlogPost, PostCategory, Category } = require('../models');

const verifyCategory = async (categoryIds) => {
  const categories = await Promise.all(categoryIds
    .map((categoryId) => Category.findByPk(categoryId)));
  return categories.some((category) => !category);
};

const newPost = async ({ title, content, categoryIds, userId }) => {
  if (verifyCategory(categoryIds)) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
  
  const t = await Sequelize.transaction();

  const createdPost = await BlogPost.create({
    title,
    content,
    userId,
  }, { transaction: t });

  await Promise.all(categoryIds.map((categoryId) => PostCategory.create({
    categoryId,
    postId: createdPost.id,
  }, { transaction: t })));
  return { status: 201, data: createdPost };
};

module.exports = {
  newPost,
};
