const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    desc: {
        type:String,
        required: true,
    },
    tech: {
        type:String,
        required: true,
    },
    image:{
        type:String,
        required:true
    },
    sourceurl: {
        type:String,
        
        required: true,
    },
    previewurl: {
        type:String,
        
       
    },
    
    createAt: {
        type:Date,
        default:Date.now(),
    },
    
  });


  const userProject = mongoose.model('userProject', projectSchema);

module.exports = userProject;