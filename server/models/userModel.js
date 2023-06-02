const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        
    },
    internship:{
        type:String,
        required:false
    },
    transcript:{
        type:String,
        required:false
    },
    request:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        required:true,
        enum:["student","coordinator","career center","admin"],
        default:"student"
    }
},{timestamps:true})




const User = mongoose.model('user',userSchema)

module.exports=User