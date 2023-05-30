const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentUploadedSchema = new Schema({
    studentId: {
        type: String,
        required: true
      },
     itemIndex: {
        type: Number,
        required: false
      },
    FileName:{
        type:String,
        required: true
    },
    uploadedFormUrl: {
        type: String,
        required: true
      },
     

},{timestamps:true})


const StudentUploadedModel = mongoose.model('studentuploaded',studentUploadedSchema)

module.exports=StudentUploadedModel
