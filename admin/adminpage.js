const path=require('path')
const express=require('express');
const router=express.Router();

router.get('/',(rq,res)=>{
 res.sendFile(path.join(__dirname,'../','views','home_page.html'));
})

router.post('/',(req,res)=>{
  redire='/';
})
module.exports=router;