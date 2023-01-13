const  mongoose  = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://Rathore:Ra9680879504%23@cluster0.1dhc6u9.mongodb.net/Resume")
.then(()=>{
    console.log('data base is conneted')

}).catch((error)=>{
    console.log(error.msssage)
})

