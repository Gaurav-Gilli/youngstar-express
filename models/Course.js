const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  document_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lesson: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  featured: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  is_free: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  skill_level: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  categories: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ins_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  published_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  created_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_by_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  locale: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'courses', // Ensure the table name matches the actual database table
  timestamps: false, // Set this to false if you do not want Sequelize to manage timestamps
});

module.exports = Course;
