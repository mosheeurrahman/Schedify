//this file maps each API URL to the correct controller function. 
const express = require('express');
const router = express.Router();
const {
  getSemesters,
  getExamTypes,
  validateSemesterExam,
  getCourses,
  getSections,
  getRoutine
} = require('../controllers/routineController');

router.get('/semesters',                              getSemesters);
router.get('/exam-types/:semester',                   getExamTypes);
router.post('/validate',                              validateSemesterExam);
router.get('/courses/:semester/:examType',            getCourses);
router.get('/sections/:semester/:examType/:course',   getSections);
router.post('/routine',                               getRoutine);

module.exports = router;