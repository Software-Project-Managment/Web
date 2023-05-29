const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')
const mdbf = ["201","202","203","204","205","206","207","208","209"]

const loginUser = async (req,res,next)=>{
try {

    if(req.body.role==="student"){
     const controlDep = req.body.username.slice(3,6)
     console.log(controlDep);
     const sonuc = mdbf.find(dep=>controlDep===dep)
     if(!sonuc){
        return next(createError(401,"This system is only for MDBF Students!"))
     }

    }

    
    
    if(req.body.role==="coordinator"){
        const controlDep = req.body.username.slice(0,11)
       console.log(controlDep);
        if(controlDep!=="coordinator"){
           return next(createError(401,"This entry is only for Coordinators!"))
        }
   
    }

    if(req.body.role==="career"){
        const controlDep = req.body.username.slice(0,6)
       console.log(controlDep);
        if(controlDep!=="career"){
           return next(createError(401,"This entry is only for Career Center!"))
        }
   
    }

   const user = await User.findOne({username:req.body.username})
 
   if(!user){
    return next(createError(404,"User not found!"))
   }

    const checkPassword = await bcrypt.compare(req.body.password,user.password)
    if(!checkPassword){
        
      next(createError(401,"invalid authentication!"))
    }
    else{
        const token = jwt.sign({
            id:user._id,
            role:user.role
        },process.env.JWT_KEY)
        const {username,role,_id,name,surname}=user
        res.status(200).json({name,_id,surname,username,role,token,})
        
    }
   

} catch (error) {
  
   next(createError(500,"Something went wrong!"))
   
}
}

const logout = async (req,res)=>{
    res.clearCookie(accessToken,{
       // sameSite:"none",
        secure:true
    }).status(200).json({
        "message":"User has been logged out"
    })
}




module.exports={
    loginUser,
    logout
}