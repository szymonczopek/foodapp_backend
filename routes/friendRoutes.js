const express = require('express')
const {getAll, inviteFriend, acceptInvitation} = require('../controllers/friendController')
const {verifyUser}= require('../middleware/verifyUser')

const router= express.Router()



router.get('/getFriends', verifyUser, getAll)
router.post('/inviteFriend', verifyUser, inviteFriend)
router.put('/acceptInvitation', verifyUser, acceptInvitation)



module.exports=router