const User = require('../models/User')

const getAll = async(req,res) => {
    const id = req.userData.id
    try{
        const friends = await User.findOne({_id: id}, 'friends -_id').populate('friends')
        res.status(200).json({message: 'Success',data:friends})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}

const inviteFriend = async(req,res) => {
    const id = req.userData.id
    const receiverId = req.receiver
    try{
        //check if user has invited

        //create invitation
        const invitation = await new Notification({type: 'Invite', sender: id, receiver: receiverId}).save()
        if(invitation){
            res.status(200).json({message: 'Success'})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Problem with sending an invitation'})
    }
}

const acceptInvitation = async(req,res) => {
    const id = req.userData.id
    const senderId = req.sender
    try{
        //check if invitation exists
        const invitation = await Notification.findOne({sender: senderId, receiver: id, type: 'Invite', status: 'Pending'})
        if(invitation){
            //accept
            
        } else{
            //there are no active invitation
            res.status(400).json({message: 'There are no active invitation'})
        }
    } catch(err){
        console.log(err)
        res.statsu(500).json({message: 'Problem with invitation accept'})
    }
}

module.exports = {
    getAll,
    inviteFriend,
    acceptInvitation
}