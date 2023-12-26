const jwt = require('jsonwebtoken');
const { User } = require('../models');

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '7d', algorithm: 'HS256' });
  return token;
};

const login = async ({ email, password }) => {
  if (!email || !password) { 
    return { status: 400, data: { message: 'Some required fields are missing' } }; 
  }

  const user = await User.findOne({ where: { email, password } });
  
  if (!user || user.password !== password) { 
    return { status: 400, data: { message: 'Invalid fields' } }; 
  }

  const token = generateToken({ email, password });
  return { status: 200, data: { token } };
};

module.exports = {
  login,
};