const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGO_URI).then(() => 
  console.log('MongoDB Connected....'))
  .catch(err => console.log(err));

module.exports = db;
