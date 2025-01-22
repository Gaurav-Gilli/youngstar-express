require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const sequelize = require('./config/database'); // Sequelize instance
const { Blog, Author, BlogAuthor } = require('./models'); // Sequelize models
const blogRoutes = require('./routes/blogs'); // Blog routes
const courseRoutes = require('./routes/courses'); // Course routes


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Test the database connection and sync models
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    // Sync models
    await sequelize.sync({ alter: true }); // Updates the table schema (use with caution in production)
    console.log('Models synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Routes
app.use('/api/blogs', blogRoutes); // Route for blog-related APIs
app.use('/api/courses', courseRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
