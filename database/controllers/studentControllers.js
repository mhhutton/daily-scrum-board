const StudentProfile = require('../models/studentSchema');

const getAllStudents = (req, res) => {
  StudentProfile.find({}, (err, results) => {
    if (err) {
      res.send(err);
      // eslint-disable-next-line no-console
      console.log('GetAllStudents FAILED', err);
    } else {
      res.send(results);
      // eslint-disable-next-line no-console
      console.log('getAllStudents SUCCESSFUL', results);
    }
  });
};

const findStudentAndUpdate = (req, res) => {
  const filter = {
    email: req.body.email,
  };
  const update = {
    name: req.body.name,
    email: req.body.email,
    age_group: req.body.age_group,
    belt_color: req.body.belt_color,
    stripes: req.body.stripes,
    medals: req.body.medals,
    about_summary: req.body.about_summary,
    profile_pic: req.body.profile_pic,
    $push: { events: req.body.events },
  };

  StudentProfile.findOneAndUpdate(filter, update,
    {
      new: true,
      upsert: true,
      rawResult: false,
    },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
        // eslint-disable-next-line no-console
        console.log('ADD/UPDATE', update);
      }
    });
};

const findStudentAndDelete = (req, res) => {
  console.log('reqbody', req.body);
  const delEmail = {
    email: req.body.email,
  };
  StudentProfile.findOneAndDelete(delEmail,
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
        // eslint-disable-next-line no-console
        console.log('DELETE', result);
      }
    // (err) => {
    // if (err) {
    //   // eslint-disable-next-line no-console
    //   console.log('DELETION FAILED', err);
    // } else {
    //   res.json();
    //   // eslint-disable-next-line no-console
    //   console.log('DELETION SUCCESSFUL', req.body);
    // }
  });
};

module.exports = { findStudentAndDelete, findStudentAndUpdate, getAllStudents };
