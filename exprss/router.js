const express = require('express');
const router = express.Router();

router.get('/router',(req,res)=>{
    res.send("hello you are on new page here which belongs to the router  ")
})

router.get('/lokesh',(req,res)=>{
    res.send("hello this is lokesh here ");
})
module.exports = router;