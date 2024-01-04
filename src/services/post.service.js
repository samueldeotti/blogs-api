const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, PostCategory, Category } = require('../models');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const verifyCategory = async (categoryIds) => {
  const categories = await Promise.all(categoryIds
    .map((categoryId) => Category.findByPk(categoryId)));
  return categories.some((category) => !category);
};

const newPost = async ({ title, content, categoryIds, userId }) => {
  if (await verifyCategory(categoryIds)) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
  
  const result = await sequelize.transaction(async (t) => {
    const createdPost = await BlogPost.create({
      title,
      content,
      userId,
    }, { transaction: t });

    await Promise.all(categoryIds.map((categoryId) => PostCategory.create({
      categoryId,
      postId: createdPost.id,
    }, { transaction: t })));

    return createdPost;
  });

  console.log(result);
  
  return { status: 201, data: result };
};

module.exports = {
  newPost,
};
