const express = require('express')
const { getAll } = require('../controllers/notificationController')
const {verifyUser}= require('../middleware/verifyUser')

const router= express.Router()

router.get('/getAll',verifyUser,getAll)

module.exports = router