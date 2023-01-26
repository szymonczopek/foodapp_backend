const mongoose = require('mongoose')

const friendSchema = mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true
    }, 

})

module.exports = mongoose.model('Friend',friendSchema)