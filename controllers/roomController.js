const Room = require('../models/Room');
const User = require('../models/User');


async function createRoom(req, res){
    const userData = req.userData
    const {name, description,members} = req.body

    const user= await User.findOne({_id:userData.id});
    
    const auth= await new Room({
        name: name,
        description: description,
        owner: user._id,
        members: members
    }).save();
    res.status(200).json({
        message: "Success",
        
    })

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

module.exports =({
    createRoom,
    getAll,
    deleteRoom
})