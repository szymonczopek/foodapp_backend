const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const PORT = 8000
const app = express()


//const verifyUserMiddleware=require('./middleware/verifyUser')
const connectDB = require('./config/db')

//Connect to DB
connectDB()


//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Routes
app.use('/api/user',require('./routes/userRoutes'))

app.listen(PORT,() => console.log('Server is running'))


