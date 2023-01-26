const Notification = require('../models/Notification')

const getAll = async(req,res) => {
    const id = req.userData.id

    const notifications = await Notification.find({receiver: id})
    if(notifications){
        res.status(200).json({message: "Success", data: notifications})
    } else{
        res.status(500).json({message: "Problem with fetching data"})
    }
}

module.exports = {
    getAll
}