const express = require('express')
const {register, login} = require('../controllers/authController')
const {createRoom} = require('../controllers/roomController')
const verifyUserMiddleware= require('../middleware/verifyUser')

const router= express.Router()

router.post('/register',register)
router.post('/login',login)

router.post('/createRoom', verifyUserMiddleware, createRoom)



module.exports=router