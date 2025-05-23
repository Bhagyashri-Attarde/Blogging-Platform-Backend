const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Correct associations with explicit foreignKey
User.hasMany(Post, { foreignKey: 'UserId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'UserId' });

module.exports = Post;
