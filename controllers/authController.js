const User=require('../models/User')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')



    async function register (req, res){
        const user= User.find({login: req.body.login})
        if((await user).length >=1 ){
            return res.json({message : "login already used"})
            } else {
                console.log()
                bcrypt.hash(req.body.password, 10, async(error, hash)=>{
                    if(error){
                        return res.json({message: "error in password"});
                    } else {
                        const auth= await new User({
                            login: req.body.login ,
                            password: hash
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
        const user= await User.findOne({login});
        console.log('user',user)
        if(!user){
            return res.json({message : "user not exist"});
        } else {
            bcrypt.compare(password, user.password, async (error, result)=>{
                if(error) {
                    console.log('error: ',error)
                    return res.json({message: "password not exist"});
                } 
                if(result){
                   const token=jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn:'30d'})
                   return res.json({
                    message: "user logged in",
                    data: {
                        login: user.login,
                        token: token
                    }
                   })
                }
            })
        }
    }
    
module.exports= ({
    register,
    login
})