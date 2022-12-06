const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  client: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  delivred: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address"
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
    trim: true
  },
  status: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status"
    }
  ]
})

module.exports = mongoose.model('Order', orderSchema)