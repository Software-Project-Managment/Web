const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CoordinatorInternshipSchema = new Schema({
    
    CoordinatorID:{
        type:String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    

},{timestamps:true})


const CIFModel = mongoose.model('CoordIntfile',CoordinatorInternshipSchema)

module.exports=CIFModel
