const mongoose = require('mongoose')
const Schema = mongoose.Schema


const counterSchema = new Schema({
    id: {
        type: String
       
      },
    seq:{
        type:Number,
        default:0
       
    }
   
     

},{timestamps:true})


const CounterModel = mongoose.model('counter',counterSchema)

module.exports=CounterModel
