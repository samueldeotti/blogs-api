const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { UserSchema } = require('../utils/validations/schema');

const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '7d', algorithm: 'HS256' });
  return token;
};

const newUser = async (userData) => {
  const { error } = UserSchema.validate(userData);

  if (error) {
    const [{ message }] = error.details;
    return { status: 400, data: { message } };
  }
  
  const { email, password } = userData;
  
  const user = await User.findOne({ where: { email } });
  if (user) {
    return { status: 409, data: { message: 'User already registered' } };
  }

  await User.create(userData);
  const token = generateToken({ email, password });

  return { status: 201, data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: users };
};

module.exports = {
  newUser,
  getAll,
};