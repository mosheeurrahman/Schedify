const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
  semester:  { type: String, required: true },
  examType:  { type: String, enum: ['midterm', 'final'], required: true },
  course:    { type: String, required: true },
  section:   { type: String, required: true },
  date:      { type: String, required: true },
  startTime: { type: String, required: true },
  endTime:   { type: String, required: true },
  room:      { type: String, required: true },
  dept:      { type: String, required: true }
});

module.exports = mongoose.model('Routine', routineSchema);
