const mongoose=require('mongoose');
var school=mongoose.model('school',{
name: {type:String},
address:{type:String},
board:{type:String},
mobileno:{type:Number}

});
module.exports={school};