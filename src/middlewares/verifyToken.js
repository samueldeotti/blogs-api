const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const baererToken = req.header('Authorization');
  if (!baererToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = baererToken.split(' ')[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { verifyToken };