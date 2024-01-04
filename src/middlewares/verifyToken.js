const jwt = require('jsonwebtoken');
const { User } = require('../models');

const verifyToken = async (req, res, next) => {
  const baererToken = req.header('Authorization');
  if (!baererToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = baererToken.split(' ')[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ where: { email: decode.email } });
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { verifyToken };