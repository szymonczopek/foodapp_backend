const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log('Connected to db'))
    .catch(err => console.log(`Error while connecting db: ${err}`))
}

module.exports = connectDB