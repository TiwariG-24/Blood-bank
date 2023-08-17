const userModels = require("../models/userModels")
const authMiddleware = require("./authMiddleware")

module.exports = async (req,res,next) =>{
try{
const user = await userModels.findById(req.body.userId)
if(user?.role !=='admin'){
    return res.status(401).send({
        success:false,
        message:'auth failed',

    })
}else{
    next();
}
}catch(error){
    console.log(error)
    return res.status(401).send({
        success:false,
        message:'auth failed admin api',
        error
    })
}
}