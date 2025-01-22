// models/Blog.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  documentId: {
    type: DataTypes.STRING,
    field: 'document_id',
  },
  title: {
    type: DataTypes.STRING,
  },
  desc: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.STRING,
  },
  publishDate: {
    type: DataTypes.STRING,
    field: 'publish_date',
  },
  month: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE(6),
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE(6),
    field: 'updated_at',
  },
  publishedAt: {
    type: DataTypes.DATE(6),
    field: 'published_at',
  },
  createdById: {
    type: DataTypes.INTEGER.UNSIGNED,
    field: 'created_by_id',
  },
  updatedById: {
    type: DataTypes.INTEGER.UNSIGNED,
    field: 'updated_by_id',
  },
  locale: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'blogs',
  timestamps: false, // Since the timestamps are custom-named, disable Sequelize's auto timestamps
});

module.exports = Blog;
