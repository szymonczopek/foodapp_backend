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
        type: mongoose.Types.ObjectId,
        ref: 'orderItem'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true 
    },
    totalCost: {
        type: number
    }
})

module.exports = mongoose.model('Order',orderSchema)