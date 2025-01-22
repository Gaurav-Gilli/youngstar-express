// models/index.js
const Blog = require('./Blog');
const Author = require('./Author');
const BlogAuthor = require('./BlogAuthor');
const Course = require('./Course'); // Add the Course model

// One Blog can have multiple Authors
Blog.belongsToMany(Author, {
  through: BlogAuthor,
  foreignKey: 'blogId',
  otherKey: 'authorId',
});

// One Author can belong to multiple Blogs
Author.belongsToMany(Blog, {
  through: BlogAuthor,
  foreignKey: 'authorId',
  otherKey: 'blogId',
});

// Export all models, including Course
module.exports = { Blog, Author, BlogAuthor, Course }; // Export Course here
