const Routine = require('../models/Routine');

const getSemesters = async (req, res) => {
  try {
    const semesters = await Routine.distinct('semester');
    res.json(semesters.sort());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExamTypes = async (req, res) => {
  try {
    const { semester } = req.params;
    const examTypes = await Routine.distinct('examType', { semester });
    res.json(examTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const validateSemesterExam = async (req, res) => {
  try {
    const { semester, examType } = req.body;
    const exists = await Routine.findOne({ semester, examType });
    if (!exists) {
      return res.status(404).json({
        valid: false,
        message: `No ${examType} exam found for ${semester}`
      });
    }
    res.json({ valid: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourses = async (req, res) => {
  try {
    const { semester, examType } = req.params;
    const courses = await Routine.distinct('course', { semester, examType });
    res.json(courses.sort());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSections = async (req, res) => {
  try {
    const { semester, examType, course } = req.params;
    const sections = await Routine.distinct('section', {
      semester,
      examType,
      course: course.toUpperCase()
    });
    res.json(sections.sort());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRoutine = async (req, res) => {
  try {
    const { semester, examType, courses } = req.body;
    if (!courses || courses.length === 0) {
      return res.status(400).json({ message: 'No courses provided' });
    }
    const results = await Routine.find({
      semester,
      examType,
      $or: courses.map(c => ({
        course:  c.course.toUpperCase(),
        section: c.section.toUpperCase()
      }))
    }).sort({ date: 1, startTime: 1 });
    if (results.length === 0) {
      return res.status(404).json({
        message: 'No exam schedule found for the selected courses'
      });
    }
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSemesters,
  getExamTypes,
  validateSemesterExam,
  getCourses,
  getSections,
  getRoutine
};
