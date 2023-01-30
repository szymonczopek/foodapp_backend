const Order = require('../models/Order')
const OrderItem = require('../models/OrderItem')
const User = require('../models/User')


async function createOrderItem(req, res){
    const {idOrder, name, description, cost, amount} = req.body
    const idUser = req.userData.id

    if(idUser !== updateOrder.owner){ //jesli nie stworzyl zamowienia czyli oddaje komus pieniądze
        const owner = await User.findOne({_id: updateOrder.owner}).populate('friends')
       owner.friends.userId = idUser
       owner.friends.balance + (cost * amount)
       const updateBalance = owner.save()

       //jesli to pierwsze
       var updateOrder = Order.findOne({_id: idOrder}).populate('members')
       var isAdded = 0
       updateOrder.members.forEach(member => {
            if(member._id = idUser) isAdded = 1
       }); 
       if(isAdded === 0){ 
    updateOrder.members.push(idUser)
    const saveMembers = updateOrder.save()
}
    }
    
const newOrderItem= await new OrderItem({
        name: name,
        description: description,
        cost: cost,
        amount: amount,
        owner: idUser,
        totalCost: cost * amount    
    }).save();

    var updateOrder = Order.findById(idOrder)
    updateOrder.orderItems.push(newOrderItem._id)
    const saveOrder = updateOrder.save()

   if (updateOrder && updateBalance) res.status(200).json({ message: "Success"})
}


module.exports = {
    createOrderItem,
    

}