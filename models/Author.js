// models/Author.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'authors',
  timestamps: false,
});

module.exports = Author;
