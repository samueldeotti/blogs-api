const { userService } = require('../services');

const newUser = async (req, res) => {
  const { status, data } = await userService.newUser(req.body);
  return res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await userService.getAll();
  return res.status(status).json(data);
};

module.exports = {
  newUser,
  getAll,
};