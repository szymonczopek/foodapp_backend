const User=require('../models/User')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')



    async function register (req, res){
        const user= User.find({login: req.body.login})
        if((await user).length >=1 ){
            return res.json({message : "login already used"})
            } else {
                bcrypt.hash(req.body.password, 10, async(error, hash)=>{
                    if(error){
                        return res.json({message: "error in password"});
                    } else {
                        const auth= await new User({
                            login: req.body.login ,
                            password: req.body.password
                        }).save();
                        res.json({
                            message: "create user successfully",
                            login: auth.login,
                            password: auth.password
                        })
                    }
                })
            }
    }

    async function login(req, res) {
        const {login, password} = req.body
        const user= await User.find({login});
        if(user.length < 1){
            return res.json({message : "user not exist"});
        } else {
            bcrypt.compare(password, user.password, async (error, result)=>{
                if(error) {
                    console.log(error)
                    return res.json({message: "password not exist"});
                } 
                if(result){
                   const token=jwt.sign({login: user.login, password: user.password})
                   return res.json({
                    message: "user logged in",
                    login: user.login,
                    token: token
                   })
                }
            })
        }
    }
    
module.exports= ({
    register,
    login
})