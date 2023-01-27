const express = require('express')
const {register, login} = require('../controllers/authController')
const { getSelectedUsers, getUserData } = require('../controllers/userController')
const {verifyUser} = require('../middleware/verifyUser')

const router= express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/getSelectedUsers/:filter',verifyUser,getSelectedUsers)
router.get('/getUser',verifyUser,getUserData)


module.exports=router