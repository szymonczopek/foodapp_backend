const express = require('express')
const cors = require('cors')
const PORT = 8000
const app = express()

const authRouter = require('./controllers/pagesController')
const verifyUserMiddleware=require('./middleware/verifyUser')

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT,() => console.log('Server is running'))



app.use('/', (req, res) => {
    res.send('Hello, Wwwwworld!');
  })
app.post('auth',authRouter)