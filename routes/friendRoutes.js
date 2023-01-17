const express = require('express')
const {getAll, inviteFriend, acceptInvitation} = require('../controllers/friendController')
const verifyUserMiddleware= require('../middleware/verifyUser')

const router= express.Router()



router.get('/friends', verifyUserMiddleware, getAll)
router.post('/inviteFriend', verifyUserMiddleware, inviteFriend)
router.post('/acceptInvitation', verifyUserMiddleware, acceptInvitation)



module.exports=router