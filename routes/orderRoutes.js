const express = require('express')
const { createOrder, getAllOrdersInRoom, getAllOrdersForUser, deleteOrder} = require('../controllers/orderController')
const {verifyUser}= require('../middleware/verifyUser')

const router= express.Router()



router.post('/createOrder', verifyUser, createOrder)
router.get('/getAllOrdersInRoom/:idRoom', verifyUser, getAllOrdersInRoom)
router.get('/getAllOrdersForUser/:idRoom', verifyUser, getAllOrdersForUser)
router.delete('/deleteOrder/:idOrder',verifyUser,deleteOrder)



module.exports=router