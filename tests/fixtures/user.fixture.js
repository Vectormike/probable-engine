const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const faker = require('faker');
const User = require('../../src/models/user.model');

const password = 'password1';
const hashedPassword = bcrypt.hashSync(password, 10);

const userOne = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  dateOfBirth: '2022-06-04T06:07:43.802Z',
  password,
  role: 'user',
  isEmailVerified: false,
};

const userTwo = {
  _id: mongoose.Types.ObjectId(),
  name: faker.name.findName(),
  email: faker.internet.email().toLowerCase(),
  dateOfBirth: '2022-06-04T06:07:43.802Z',
  password,
  role: 'user',
  isEmailVerified: false,
};

const insertUsers = async (users) => {
  await User.insertMany(users.map((user) => ({ ...user, password: hashedPassword })));
};

module.exports = {
  userOne,
  userTwo,
  insertUsers,
};
