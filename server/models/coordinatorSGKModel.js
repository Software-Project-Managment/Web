const mongoose = require('mongoose')
const Schema = mongoose.Schema


const coordinatorSGKSchema = new Schema({
    
    CoordinatorID:{
        type:String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    

},{timestamps:true})


const CoordSGKModel = mongoose.model('CoordSGK',coordinatorSGKSchema)

module.exports=CoordSGKModel
