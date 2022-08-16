const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const duesSchema = new mongoose.Schema({
  duesStartDate: {
    type: Date,
    required: true
  },
  invoice: {
    type: String,
    required: true
  },
  itemId: {
    _id: {
      type: ObjectId,
      ref: 'Item',
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  total: {
    type: Number,
    required: true
  },
  memberId: {
    type: ObjectId,
    ref: 'Member'
  },
  bankId: {
    type: ObjectId,
    ref: 'Bank'
  },
  payments: {
    proofPayment: {
      type: String,
      required: true
    },
    bankFrom: {
      type: String,
      required: true
    },
    accountHolder: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: 'Proses'
    }
  }
})

module.exports = mongoose.model('Dues', duesSchema)