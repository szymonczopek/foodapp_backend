const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    login: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    rooms: [{
        type: mongoose.Types.ObjectId,
        ref: 'Room'
    }],
    balance: {
        type: Number,
        require: true
    },
    friends: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]

})

module.exports = mongoose.model('User',userSchema)