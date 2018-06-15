const express=require('express');
const bodyParser=require('body-parser');

const { mongoose } =require('./db.js'); 
var schoolController=require('./controller/schoolController');
 app=express();
//config express middle ware
app.use(bodyParser.json());
app.listen(3000,()=>
    console.log("Server started at port 3000..")
);
app.use('/schools',schoolController);
 