const Notification = require('../models/Notification')

const getAll = async(req,res) => {
    const id = req.userData.id

    const notifications = await Notification.find({receiver: id})
    if(notifications){
        res.status(200).json({message: "Success", data: notifications})
    } else{
        res.status(500).json({message: "Problem with fetching notifications data"})
    }
}

const reveiveNotification = async(req, res) =>{
    const id = req.body.idNotification
    const idUser = req.userData.id
    const status = req.body.status
try{
        const noti= await Notification.findOne({_id: id, receiver: idUser, status: "Pending"})
        if(noti && status==="Accepted"){
            Notification.updateOne({ _id: id }, { status: "Accepted" })
            res.status(200).json({message: 'Success'})
        }
        if(noti && status==="Refused")
        {
            Notification.updateOne({ _id: id }, { status: "Refused" })
            res.status(200).json({message: 'Success'})
        }
    } catch{
        res.statsu(500).json({message: 'Problem with reveive notification '})
    }
}

const pushNotification = async(req, res) =>{
    const idReceiver = req.body.idReceiver
    const idSender = req.userData.id
    try{
        const noti= await new Notification({
            type: "Push",
            sender: idSender,
            receiver: idReveiver,
            status: "Pending"
        }).save();
        res.status(200).json({message: "Success"})           
    } catch{
        res.status(500).json({
            message: "Problem with pushing notification"
            
        })          
    }
}

const getNewNotifications = async(req, res) =>{
    const idUser= req.userData.id
    try{
        const notifications= await Notification.find({receiver: idUser, status: "Pending"})
        res.status(200).json({message: "Success", data: notifications})
    } catch{
        res.status(500).json({message: "Problem with fetching new notifications"})          
    }

}
module.exports = {
    getAll,
    reveiveNotification,
    pushNotification,
    getNewNotifications
}