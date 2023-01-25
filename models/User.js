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
    img: {
        type: String,
        default: 'profile2'
    },
    number: {
        type: 'String',
        default: 'Not given'
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
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            require: true
        },
        balance: {
            type: Number,
            default: 0
        }
    }]

})

module.exports = mongoose.model('User',userSchema)