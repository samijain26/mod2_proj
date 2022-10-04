const mongoose = require('mongoose')

const antiqueModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image:
    {
        type: String,
        required: true,
    },
   origin: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Antique', antiqueModel)