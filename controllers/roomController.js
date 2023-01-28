const Room = require('../models/Room');
const User = require('../models/User');


async function createRoom(req, res){
    const user = req.userData.id
    const {name, description,members} = req.body
    
    const room= await new Room({
        name: name,
        description: description,
        owner: user,
        members: [user,...members]
    }).save();
    if(room){
        //add room to use list

        var userData = await User.findById(user)
        userData.rooms.push(room._id)
        const updateUser = userData.save()

        if(updateUser)
            res.status(200).json({
                message: "Success",
                data: {
                    name: room.name,
                    members: room.members,
                    _id: room._id
                }
            })
        else
            res.status(500).json({message: 'Adding room failed'})
    } else{
        res.status(500).json({message: 'Creating room failed'})
    }
}

const getAll = async(req,res) => {
    const id = req.userData.id
    try{
        const rooms = await User.findOne({_id: id}, 'rooms -_id').populate('rooms','name members owner')
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