const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')
const Room = require('../models/Room')

async function createOrder(req, res){
    const userId = req.userData.id
    
    const {name, description, idRoom} = req.body

    const newOrder= await new Order({
        name: name,
        description: description,
        owner: userId    
    }).save();

    var updateRoom = await Room.findById(idRoom)
    updateRoom.orders.push(newOrder._id)
    const saveRoom = updateRoom.save()
    if(saveRoom) res.status(200).json({ message: "Success"})
    else res.status(400).json({message:'Creating order failed'})
}

const getAllOrdersInRoom = async(req,res) => {
    const id = req.params.idRoom
    try{
        const orders = await Room.find({_id: id}).populate('orders')
        if(orders) res.status(200).json({message: 'Success',data:orders})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}
const getAllOrdersForUser = async(req,res) => {
    const id = req.params.idRoom
    const idUser = req.userData.id
    try{
        const orders = await Room.find({_id: id, members: idUser}).populate('orders')
        if(orders) res.status(200).json({message: 'Success',data:orders})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}

const deleteOrder = async(req,res) => {
    const id = req.params.idOrder
    try{
        await Order.deleteOne({_id: id})
        res.status(200).json({message: 'Success'})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}
const getOrder = async(req, res) =>{
    const idOrder = req.params.idOrder
    try{
        const ord = await Order.findOne({_id: id}).populate('orderItems')
        if(ord) res.status(200).json({message: 'Success',data: ord})
    } catch{
        console.log(err)
        res.status(500).json({message: 'Problem with fetching order'})
    }
}

const addMembersOrder = 
module.exports={
    createOrder,
    getAllOrdersInRoom,
    getAllOrdersForUser,
    deleteOrder,
    getOrder
    
}