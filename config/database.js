const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    dialectOptions: {
        connectTimeout: 10000, // increase connection timeout to 10 seconds
      },
    logging: false, // Set to true for debugging SQL queries
  }
);

module.exports = sequelize;
