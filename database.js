const mongoose=require('mongoose');


mongoose.connect("mongodb://localhost:27017/usercrudapp").then(()=>{
  console.log("connection succesfull");  
}).catch((e)=>{
    console.log(e);
})
   

const Schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String 
    
})
const Usermodel = mongoose.model('User',Schema)


module.exports=Usermodel;