const express = require('express')
const {verifyUser}= require('../middleware/verifyUser')
const {createRoom, getAll, getRoomInfo, deleteRoom, addMembers} =require('../controllers/roomController')


const router= express.Router()

router.post('/create',verifyUser,createRoom)
router.get('/getAll',verifyUser,getAll)
router.get('/getRoomInfo/:idRoom',verifyUser,getRoomInfo)
router.delete('/deleteRoom/:idRoom',verifyUser,deleteRoom)
router.get('/addMembers/:idRoom',verifyUser,addMembers)

module.exports = router