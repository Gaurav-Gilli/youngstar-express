const express = require('express');
const { Blog, Author } = require('../models');
const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        {
          model: Author,
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
