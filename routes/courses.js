// routes/courses.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route to get all courses
router.get('/', courseController.findAllCourses);

// Route to get a specific course by ID
router.get('/:id', courseController.findCourseById);

// Route to create a new course
router.post('/', courseController.createCourse);

// Route to update an existing course by ID
router.put('/:id', courseController.updateCourse);

// Route to delete a course by ID
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
