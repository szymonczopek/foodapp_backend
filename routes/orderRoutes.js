const express = require('express')
const {createOrder, getAllOrdersInRoom, getAllOrdersForUser, deleteOrder, getOrder} = require('../controllers/orderController')
const {verifyUser}= require('../middleware/verifyUser')

const router= express.Router()



router.post('/createOrder', verifyUser, createOrder)
router.get('/getAllOrdersInRoom/:idRoom', verifyUser, getAllOrdersInRoom)
router.get('/getAllOrdersForUser/:idRoom', verifyUser, getAllOrdersForUser)
router.delete('/deleteOrder/:idOrder',verifyUser,deleteOrder)
router.get('/getOrderItems/:idOrder', verifyUser, getOrder)


module.exports=router