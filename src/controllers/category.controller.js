const { categoriesService } = require('../services');

const newCategory = async (req, res) => {
  const { status, data } = await categoriesService.newCategory(req.body);
  return res.status(status).json(data);
};

module.exports = {
  newCategory,
};