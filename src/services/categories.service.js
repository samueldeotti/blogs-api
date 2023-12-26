const { Category } = require('../models');

const newCategory = async ({ name }) => {
  if (!name) { 
    return { status: 400, data: { message: '"name" is required' } }; 
  }
  const createdCategory = await Category.create({ name });
  return { status: 201, data: createdCategory };
};

module.exports = {
  newCategory,
};