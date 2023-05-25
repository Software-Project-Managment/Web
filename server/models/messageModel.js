const mongoose = require('mongoose');
const Schema = mongoose.Schema

const messageSchema = new Schema({
  gonderen: { type: String, required: true },
  alici: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  messageFileUrl: {type: String},
  
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;