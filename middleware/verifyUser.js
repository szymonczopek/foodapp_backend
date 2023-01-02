const jwt = require('jsonwebtoken')

async function verifyUser(req, res, next) {
    try{
    const token= req.headers.authorization.split(" ")[1]
    const decode=jwt.verify(token, "USER")
    req.userData=decode
    next()
    } catch(e){
        return res.json({message : "user auth error!!"})
    }
}

module.exports = verifyUser