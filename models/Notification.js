const mongoose = require('mongoose')

const notificationSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['Invite','Push'],
        require: true
    },
    sender: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true
    },
    status: {
        type: String,
        enum: ['Accepted','Refused','Pending'],
        default: 'Pending'
    }
})

module.exports = mongoose.model('Notification',notificationSchema)