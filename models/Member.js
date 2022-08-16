const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  dateBirth: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Member', memberSchema)