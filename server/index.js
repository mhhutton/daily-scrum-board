const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/../client/dist')));

const bodyParser = require('body-parser');

const db = require('../database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const { findStudentAndDelete, findStudentAndUpdate, getAllStudents } = require('../database/controllers/studentControllers.js');

// app.get('/students', getAllStudents);
// app.post('/students', findStudentAndUpdate);
// app.delete('/remove', findStudentAndDelete);
//app.post('eventsUpdate', findStudentAndUpdate);

const PORT = 5000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
