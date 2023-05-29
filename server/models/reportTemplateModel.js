const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reportTemplateSchema = new Schema({
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
    reportTemplateUrl: {
        type: String,
        required: true
      },
     

},{timestamps:true})


const ReportTemplateModel = mongoose.model('reportTemplate',reportTemplateSchema)

module.exports=ReportTemplateModel
