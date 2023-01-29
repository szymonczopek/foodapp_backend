const express = require('express')
const {createOrderItem, getAllItemOrdersInOrder} = require('../controllers/orderItemController')
const {verifyUser}= require('../middleware/verifyUser')

const router= express.Router()



router.post('/createOrderItem', verifyUser, createOrderItem)
router.get('/getAllItemOrdersInOrder/:idOrder', verifyUser, getAllItemOrdersInOrder)




module.exports=router