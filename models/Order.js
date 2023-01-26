const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
    },
    orderItems: {
        type: mongoose.Types.ObjectId
    }
})

module.exports = mongoose.model('Order',orderSchema)