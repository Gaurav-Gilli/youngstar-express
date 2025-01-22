// models/BlogAuthor.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BlogAuthor = sequelize.define('BlogAuthor', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  blogId: {
    type: DataTypes.INTEGER.UNSIGNED,
    field: 'blog_id',
    references: {
      model: 'blogs',
      key: 'id',
    },
  },
  authorId: {
    type: DataTypes.INTEGER.UNSIGNED,
    field: 'author_id',
    references: {
      model: 'authors',
      key: 'id',
    },
  },
}, {
  tableName: 'blogs_author_lnk',
  timestamps: false,
});

module.exports = BlogAuthor;
