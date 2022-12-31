const express = require('express')
const cors = require('cors')
const PORT = 8000

const app = express()

const pagesController = require('./controllers/pagesController')


//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT,() => console.log('Server is running'))




app.get('/register', pagesController.register)
app.get('/login', pagesController.login)