const express = require('express')
const {verifyUser}= require('../middleware/verifyUser')
const {createRoom, getAll, getRoomInfo} =require('../controllers/roomController')


const router= express.Router()

router.post('/create',verifyUser,createRoom)
router.get('/getAll',verifyUser,getAll)
router.get('/getRoomInfo/:idRoom',verifyUser,getRoomInfo)

module.exports = router