const express = require('express')
const { getAll, reveiveNotification } = require('../controllers/notificationController')
const {verifyUser}= require('../middleware/verifyUser')

const router= express.Router()

router.get('/getAll',verifyUser,getAll)
router.put('/setAsRead',verifyUser,reveiveNotification)

module.exports = router