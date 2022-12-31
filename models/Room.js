const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    members: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: 'Order'
    }],
    description: {
        type: String
    }
})

module.exports = mongoose.model('Room',roomSchema)