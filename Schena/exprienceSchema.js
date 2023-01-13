const mongoose = require('mongoose');

const exprienceSchema = new mongoose.Schema({
    post: {
        type:String,
        required: true,
    },
    company: {
        type:String,
        required: true,
    },
    desc: {
        type:String,
        required: true,
    },
    date: {
        type:String,
        
        required: true,
    },
    
    createAt: {
        type:Date,
        default:Date.now(),
    },
    
  });


  const Exprience = mongoose.model('Exprience', exprienceSchema);

module.exports = Exprience;