const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const createError = require('../utils/createError');
const jwt = require('jsonwebtoken')


const allUsers = async (req,res,next)=>{
   const users = await User.find({role:"coordinator"})

   res.json(users)
}

const findUser = async(req,res,next)=>{
   const {id} = req.params
   const user = await User.findOne({_id:id})
   res.json(user)
}

const findCoordinators = async (req, res, next) => {
   try {
     const coordinators = await User.find({})
     res.json(coordinators);
   } catch (error) {
     console.error(error);
     
     res.status(500).send('Internal server error');
   }
 }



const postUser = async (req,res,next)=>{
   try {
    const user = new User(req.body)
    user.password = await bcrypt.hash(req.body.password,10) 
    await user.save()

    //create token
    const token = jwt.sign({
      id:user._id,
      role:user.role
   },process.env.JWT_KEY)

    res.status(200).json({"message":"user has been created" , "user": user ,token})
   } catch (error) {
    next(error)
   }
   

  
}
const deleteUser = async (req,res,next)=>{
   try{
      const silinecekUser= await User.findByIdAndDelete({_id:req.params.id})
      if(silinecekUser){
       return res.json({
           "message":"kullanıcı silindi"
       })
      }else{
       throw createError(404,"Kullanıcı bulunamadı!")
      }
       
   }catch(err){
       next(err)
   }
}

module.exports={
    allUsers,
    postUser,
    deleteUser,
    findUser,
    findCoordinators
}