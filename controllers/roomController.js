const Room = require('../models/Room');
const User = require('../models/User')

async function createRoom(req, res){
    const userData = req.userData
    const {name, description} = req.body

    const user= await User.findOne({_id:userData.id});
    
    const auth= await new Room({
       name: name,
        description: description,
        owner: user,
        members: user
    }).save();
    res.json({
        message: "Success",
        
    })

}

module.exports =({
    createRoom
})