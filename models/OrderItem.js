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
    },
    totalCost: {
        type: Number,
        default:0
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true 
    },
})

module.exports = mongoose.model('OrderItem',orderItemSchema)