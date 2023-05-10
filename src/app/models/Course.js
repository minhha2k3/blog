const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String, maxLength: 255},
  description: {type: String, minLength: 1},
  image: {type: String, minLength: 1},
  createAt: {type: Date, default: Date.now },
  updateAt: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', Course);