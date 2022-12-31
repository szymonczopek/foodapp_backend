const mongoose = require('mongoose')

const friendSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('Friend',friendSchema)