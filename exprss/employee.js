const express = require('express');
const router = express.Router();
const data = {};
data.employee= require('./employee.json');
router.route('/')
.get((req,res)=>{
    res.json(data.employee);
})
.post(express.json(), (req, res) => {
    res.json({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "id": req.body.id
    })
})
.put((req,res)=>{
    res.json({
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "id":req.body.id
    })
})
.delete((req,res)=>{
    res.json({"id":req.body.id
})
})

module.exports= router;