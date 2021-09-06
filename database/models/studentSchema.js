const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  age_group: {
    type: String,
    enum: ['Adult', 'Youth'],
  },
  belt_color: {
    type: String,
    enum: ['white', 'blue', 'purple', 'brown', 'black'],
  },
  stripes: Number,
  medals: Number,
  about_summary: String,
  profile_pic: String,
  events: [],
});

const StudentProfile = mongoose.model('StudentProfile', studentSchema);

module.exports = StudentProfile;
