const express=require('express');
var router=express.Router(); 
var ObjectId=require('mongoose').Types.ObjectId;
//work with mongoose model school
var {school}=require('../models/school');
//localhost:3000/schools/
//this will retrive all employees from the collection
router.get('/',(req,res)=>{
school.find((err,docs)=>{
    if(!err){
        res.send(docs);
    }
    else{
        console.log('Error in retreving schools:'+JSON.stringify(err,undefined,2));
    }
});
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id:,${req.params.id}`);    }
     school.findById(req.params.id,(err,doc)=>{
         if(!err){
             res.send(doc);
         }
         else{
            console.log('Error in retreving schools:'+JSON.stringify(err,undefined,2)); 
         }
         
     });
});
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id:,${req.params.id}`);   
     }
     var s={
        name:req.body.name,
        address:req.body.address,
        board:req.body.board,
        mobileno:req.body.mobileno,
    
    
    };


});
router.post('/',(req,res)=>{
var s=new school({
    name:req.body.name,
    address:req.body.address,
    board:req.body.board,
    mobileno:req.body.mobileno,


});
s.save((err,doc)=>{
    if(!err){
        res.send(doc);

    }
    else{
        console.log('Error in school save'+JSON.stringify(err,undefined,2));
    }
    
});
});
module.exports=router;
