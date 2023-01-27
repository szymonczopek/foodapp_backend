const User = require("../models/User")


const getSelectedUsers = async (req,res) => {
    const filter = req.params.filter
    const id = req.userData.id

    try{
        const users = await User.find({login: { "$regex" : filter, "$options": 'i'}},'login img')
        //users without user demanding list of users
        const filteredUsers = users.filter(u => u._id != id) 
        res.status(200).json({message: 'Success', data: filteredUsers})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data.'})
    }
}

const getAll = async(req,res) => {
    try{
        const users = await User.find()
        res.status(200).json({message: 'Success',data: users})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}

const getUserData = async(req,res) => {
    const id = req.userData.id
    try{
        const user = await User.findOne({_id: id},'login img number balance')
        res.status(200).json({message: 'Success',data: user})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data'})
    }
}

module.exports = {
    getSelectedUsers,
    getAll,
    getUserData
}
