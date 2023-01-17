const User = require("../models/User")


const getSelectedUsers = async (req,res) => {
    const filter = req.name

    try{
        const users = await User.find({login: filter, "options": i})
        res.status(200).json({message: 'Success', data: users})
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'Problem with fetching data.'})
    }
} 

module.exports = {
    getSelectedUsers
}