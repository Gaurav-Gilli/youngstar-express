// controllers/courseController.js
const { Course } = require('../models'); // Import the Course model

module.exports = {
  async findAllCourses(req, res) {
    try {
      const courses = await Course.findAll(); // Fetch all courses
      res.status(200).json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Error fetching courses' });
    }
  },

  async findCourseById(req, res) {
    const { id } = req.params;
    try {
      const course = await Course.findOne({ where: { id } });

      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }

      res.status(200).json(course);
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ message: 'Error fetching course' });
    }
  },

  async createCourse(req, res) {
    const { created_by_id, title, lesson, duration, price, ...otherFields } = req.body;

    // Basic validation to check if created_by_id exists in the database (in this case, we check if it's a valid ID)
    if (!created_by_id || typeof created_by_id !== 'number') {
      return res.status(400).json({ message: 'Invalid created_by_id provided' });
    }

    try {
      // Proceed with creating the course
      const newCourse = await Course.create({
        created_by_id,  // Foreign key
        title,
        lesson,
        duration,
        price,
        ...otherFields
      });

      res.status(201).json(newCourse);
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ message: 'Error creating course' });
    }
  },

  async updateCourse(req, res) {
    const { id } = req.params;
    const { created_by_id, title, lesson, duration, price, ...otherFields } = req.body;

    // Basic validation to check if created_by_id exists in the database (in this case, we check if it's a valid ID)
    if (!created_by_id || typeof created_by_id !== 'number') {
      return res.status(400).json({ message: 'Invalid created_by_id provided' });
    }

    try {
      const updatedCourse = await Course.update(
        { created_by_id, title, lesson, duration, price, ...otherFields },
        { where: { id }, returning: true }
      );

      if (updatedCourse[0] === 0) {
        return res.status(404).json({ message: 'Course not found' });
      }

      res.status(200).json(updatedCourse[1][0]);
    } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ message: 'Error updating course' });
    }
  },

  async deleteCourse(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Course.destroy({ where: { id } });

      if (deleted === 0) {
        return res.status(404).json({ message: 'Course not found' });
      }

      res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).json({ message: 'Error deleting course' });
    }
  }
};
