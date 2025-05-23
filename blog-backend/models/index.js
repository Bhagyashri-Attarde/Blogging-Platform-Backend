const sequelize = require('../config/db');
const User = require('./user');
const Post = require('./post');

// Associations are declared in post.js
module.exports = {
  sequelize,
  User,
  Post
};
