const mongoose = require('mongoose')
const Schema = mongoose.Schema


const SGKSchema = new Schema({
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
      SGKUrl: {
        type: String,
        required: true
      }
      

},{timestamps:true})


const SGKModel = mongoose.model('sgkfile',SGKSchema)

module.exports=SGKModel
