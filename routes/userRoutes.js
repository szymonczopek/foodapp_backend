const express = require('express')
const {register, login} = require('../controllers/userController')
const verifyUserMiddleware= require('../middleware/verifyUser')

const router= express.Router()

router.post('/register',register)
router.post('/login',login)


module.exports=router