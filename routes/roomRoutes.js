const express = require('express')
const {verifyUser}= require('../middleware/verifyUser')
const {createRoom} =require('../controllers/roomController')

const router= express.Router()

router.post('/create',verifyUser,createRoom)

module.exports = router