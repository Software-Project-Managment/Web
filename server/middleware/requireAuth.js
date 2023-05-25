const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')
const User = require('../models/userModel')

const verifyToken = async (req,res,next)=>{

    const {authorization} = req.headers
    if(!authorization) {
        return next(createError(401,"You are not authenticated!"))
    } 

    const token = authorization.split(' ')[1]

   
        try {
            const {id} = jwt.verify(token,JWT_KEY)
            req.user = await User.findOne({_id:id}).select('_id')
            next()
        } catch (error) {
            console.log(error);
            next(createError(403,"Token is not valid!"))
        }
       
     

    

}

module.exports=verifyToken