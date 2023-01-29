const express = require('express')
const {verifyUser}= require('../middleware/verifyUser')
const {createRoom, getAll} =require('../controllers/roomController')

const router= express.Router()

router.post('/create',verifyUser,createRoom)
router.post('/getAll',getAll)

module.exports = router