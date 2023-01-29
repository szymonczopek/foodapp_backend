const express = require('express')
const { getAll, reveiveNotification, pushNotification, getNewNotifications, getNewInvitations } = require('../controllers/notificationController')
const {verifyUser}= require('../middleware/verifyUser')

const router= express.Router()

router.get('/getAll',verifyUser,getAll)
router.put('/receiveNotification/:idNotification',verifyUser,reveiveNotification)
router.post('/pushNotification',verifyUser,pushNotification)
router.get('/getNewNotifications',verifyUser,getNewNotifications)
router.get('/getNewInvitations',verifyUser,getNewInvitations)

module.exports = router

