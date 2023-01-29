const Notification = require('../models/Notification')

const getAll = async(req,res) => {
    const id = req.userData.id

    const notifications = await Notification.find({receiver: id},'type sender createdAt seen status').populate('sender','login')
    if(notifications){
        res.status(200).json({message: "Success", data: notifications})
    } else{
        res.status(500).json({message: "Problem with fetching notifications data"})
    }
}

const reveiveNotification = async(req, res) =>{
    const id = req.params.idNotification
    try{
        const noti= await Notification.findOne({_id: id})
        if(noti){
            noti.seen=true
            const update = noti.save()
            //Notification.updateOne({ _id: id }, { seen: true })
            if(update)
                res.status(200).json({message: 'Success'})
            else
                res.status(500).json({message: 'Server error'})
        } else
            res.status(400).json({message: 'There is problem with invitation'})

    } catch{
        res.status(500).json({message: 'Problem with reveive notification '})
    }
}

const pushNotification = async(req, res) =>{
    const idReceiver = req.body.idReceiver
    const idSender = req.userData.id
    try{
        const noti= await new Notification({
            type: "Push",
            sender: idSender,
            receiver: idReceiver,
            seen: false
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
        const notifications= await Notification.find({receiver: idUser, seen: false})
        res.status(200).json({message: "Success", data: notifications})
    } catch{
        res.status(500).json({message: "Problem with fetching new notifications"})
    }
}

const getNewInvitations = async(req, res) =>{
    const idUser= req.userData.id
    try{
        const notifications= await Notification.find({receiver: idUser, status: 'Pending'})
        res.status(200).json({message: "Success", data: notifications})
    } catch{
        res.status(500).json({message: "Problem with fetching new invitations"})
    }
}
module.exports = {
    getAll,
    reveiveNotification,
    pushNotification,
    getNewNotifications,
    getNewInvitations
}