const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
  breed: String,
  personality: String,
  furLength: String,
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;