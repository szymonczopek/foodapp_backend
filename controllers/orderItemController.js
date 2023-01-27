const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')


async function createOrderItem(req, res){
    const {idOrder, name, description, cost, amount} = req.body
    
const newOrderItem= await new OrderItem({
        name: name,
        description: description,
        cost: cost,
        amount: amount    
    }).save();
    const updateOrder = Order.findOneAndUpdate({_id: idOrder},{$push: {orderItems: newOrderItem._id}})
    if(updateOrder) res.status(200).json({ message: "Success"})
}

const getAllItemOrdersInOrder = async(req,res) => {
    const id = req.idOrder
    try{
        const orderItems = await OrderItem.find({_id: id}).populate('orderItems')
        res.status(200).json({message: 'Success',data:orders})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}
module.exports({
    createOrderItem,
    getAllItemOrdersInOrder
})