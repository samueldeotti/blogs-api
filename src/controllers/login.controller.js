const { loginService } = require('../services');

const login = async (req, res) => {
  const { status, data } = await loginService.login(req.body);
  return res.status(status).json(data);
};

module.exports = {
  login,
};