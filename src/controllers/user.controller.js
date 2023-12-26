const { userService } = require('../services');

const newUser = async (req, res) => {
  const { status, data } = await userService.newUser(req.body);
  return res.status(status).json(data);
};

module.exports = {
  newUser,
};