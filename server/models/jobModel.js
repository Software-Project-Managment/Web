const mongoose = require('mongoose')
const Schema = mongoose.Schema


const jobSchema = new Schema({
    NameofInternship: {
        type: String,
        required: true
      },
    Position:{
        type:String,
        required: true
    },
    HowManyStudents:{
        type:String,
        required: true
    },
    LastDate:{
        type:String,
        required: true
    },
    Url: {
        type: String,
        required: true
      },
     

},{timestamps:true})


const JobModel = mongoose.model('job',jobSchema)

module.exports=JobModel
