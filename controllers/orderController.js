const Order = require('../models/Order')
const Room = require('../models/Room')

async function createOrder(req, res){
    const userId = req.userData.id
    
    const {name, description, idRoom} = req.body

    const newOrder= await new Order({
        name: name,
        description: description,
        owner: userId    
    }).save();
    const updateRoom = Room.findOneAndUpdate({_id: idRoom},{$push: {orders: newOrder._id}})
    if(updateRoom) res.status(200).json({ message: "Success"})
    else res.status(400).json({message:'Failed'})
}

const getAllOrdersInRoom = async(req,res) => {
    const id = req.params.idRoom
    try{
        const orders = await Room.find({_id: id}).populate('orders')
        res.status(200).json({message: 'Success',data:orders})
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
        res.status(200).json({message: 'Success',data:orders})
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
module.exports({
    createOrder,
    getAllOrdersInRoom,
    getAllOrdersForUser,
    deleteOrder
})