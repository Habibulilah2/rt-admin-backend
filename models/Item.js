const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categoryId: {
    type: ObjectId,
    ref: 'Category'
  },
  imageId: [{
    type: ObjectId,
    ref: 'Image'
  }]
})

module.exports = mongoose.model('Item', itemSchema)