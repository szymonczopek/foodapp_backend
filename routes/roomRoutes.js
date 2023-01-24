const express = require('express')
const verifyUserMiddleware= require('../middleware/verifyUser')
const {createRoom} =require('../controllers/roomController')

const router= express.Router()

router.post('/create',verifyUserMiddleware,createRoom)

module.exports = router