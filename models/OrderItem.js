const mongoose = require('mongoose')

const orderItemSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    cost: {
        type: Number,
    },
    amount: {
        type: Number
    }
})

module.exports = mongoose.model('OrderItem',orderItemSchema)