const mongoose = require('mongoose')
const Schema = mongoose.Schema


const internshipSchema = new Schema({
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
      stajFormuUrl: {
        type: String,
        required: true
      },
      imza: {
        type: Boolean,
        default: false
      },
      approve:{
        type:Boolean,
        default:false
      }

},{timestamps:true})


const IFModel = mongoose.model('intfile',internshipSchema)

module.exports=IFModel
