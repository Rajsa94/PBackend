const  mongoose  = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(process.env.SECRET_KEY)
.then(()=>{
    console.log('data base is conneted')

}).catch((error)=>{
    console.log(error.msssage)
})

