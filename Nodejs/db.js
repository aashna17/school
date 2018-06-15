const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb',(err)=>{
if(!err)
console.log('MongoDB connection succeded.');
else 
console.log('Error in DB connection:'+JSON.stringify(err,undefined,2));
});