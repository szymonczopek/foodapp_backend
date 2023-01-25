const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const PORT = 8000
const app = express()



const connectDB = require('./config/db')

//Connect to DB
connectDB()


//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Routes
app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/room',require('./routes/roomRoutes'))
app.use('/api/friend',require('./routes/friendRoutes'))
app.use('/api/notification',require('./routes/notificationRoutes'))

app.listen(PORT,() => console.log('Server is running'))


