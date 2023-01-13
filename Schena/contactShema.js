const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    phone: {
        type:String,
        required: true,
    },
    message: {
        type:String,
        required: true,
    },
    
    createAt: {
        type:Date,
        default:Date.now(),
    },
    
  });


  const msgUser = mongoose.model('msgUser', msgSchema);

module.exports = msgUser;