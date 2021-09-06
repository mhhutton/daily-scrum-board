const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/student', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });

db.then(() => {
  // eslint-disable-next-line no-console
  console.log('SUCCESS, Now connected to Mongo database!');
})
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('ERROR, cannot connect to mongo database.', err);
  });

module.exports = db;
