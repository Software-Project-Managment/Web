const mongoose = require('mongoose');
const Schema = mongoose.Schema

const notificationSchema = new Schema({
  gonderen: { type: String, required: true },
  alici: { type: String, required: true },
  subject: { type: String, required: true },
 
});

const Notification = mongoose.model('notification', notificationSchema);

module.exports = Notification;