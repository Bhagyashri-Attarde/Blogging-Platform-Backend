const sequelize = require('../config/db');
const User = require('./user');
const Post = require('./post');

module.exports = {
  sequelize,
  User,
  Post
};
