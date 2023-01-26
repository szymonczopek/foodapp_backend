const express = require('express')
const {register, login} = require('../controllers/authController')
const { getSelectedUsers } = require('../controllers/userController')
const {verifyUser} = require('../middleware/verifyUser')

const router= express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/getSelectedUsers/:filter',verifyUser,getSelectedUsers)


module.exports=router