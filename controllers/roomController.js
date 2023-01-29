const Room = require('../models/Room');
const User = require('../models/User');


async function createRoom(req, res){
    const userData = req.userData
    const {name, description, members} = req.body

    const user= await User.findOne({_id:userData.id});
    
    const newRoom= await new Room({
        name: name,
        description: description,
        owner: user._id,
        members: members
    }).save();
    const updateUser = User.findOneAndUpdate({_id: user._id},{$push: {rooms: newRoom._id}})
    if(updateUser) res.status(200).json({message: "Success"})
}

const getAll = async(req,res) => {
    const id = req.userData.id
    try{
        const rooms = await User.findOne({_id: id}, 'rooms -_id').populate('rooms')
        res.status(200).json({message: 'Success',data:rooms})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}
const deleteRoom = async(req,res) => {
    const id = req.body.id
    try{
        await Room.deleteOne({_id: id})
        res.status(200).json({message: 'Success'})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}
const addMembers = async(req, res) =>{
    const members = req.body.members
    const idRoom = req.body.idRoom

    try{
    members.forEach(member => {
        const user= User.findOne({_id:member.id});
        if(user){
            const updateMembers = Room.findOneAndUpdate({_id:idRoom},{$push: {members: user._id}})
        }
        else{
            res.status(500).json({message: "User " + member.name + " doesn't exist"})
        }
    });
    res.status(200).json({message: 'Success'})
} catch{
    console.log(err)
    res.status(500).json({message: 'Problem with adding members'})
}
}

const getRoomInfo = async(req, res) =>{
    const idRoom = req.body.idRoom
     try{
        const room = await Room.findOne({_id: idRoom}).populate('members').populate('oreders') 
        res.status(200).json({message: 'Success',data:room})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}

module.exports =({
    createRoom,
    getAll,
    deleteRoom,
    addMembers,
    getRoomInfo
})