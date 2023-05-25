const mongoose = require('mongoose')
const Schema = mongoose.Schema


const transcriptSchema = new Schema({
    studentId: {
        type: String,
        required: true
      },
    studentName:{
        type:String,
        required: true
    },
    studentSurname:{
        type:String,
        required: true
    },
    studentNo:{
        type:String,
        required: true
    },
    transcriptFormuUrl: {
        type: String,
        required: true
      },
     

},{timestamps:true})


const TranscriptModel = mongoose.model('transcriptfile',transcriptSchema)

module.exports=TranscriptModel
