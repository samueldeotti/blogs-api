const { categoriesService } = require('../services');

const newCategory = async (req, res) => {
  const { status, data } = await categoriesService.newCategory(req.body);
  return res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await categoriesService.getAll();
  return res.status(status).json(data);
};

module.exports = {
  newCategory,
  getAll,
};