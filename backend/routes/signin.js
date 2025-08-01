const express = require('express');
const router = express.Router();
const userModel = require('../models/signin');

router.post('/', async(req,res)=>{
    const{username,password} = req.body;

    if(!username||!password){
        return res.status(400).json({msg:"Username or password missing"});
    }
    const existingUser = await userModel.findOne({username});
    if(existingUser) return res.status(409).json({msg:"Username already taken. Please enter a new username."});

    await userModel.create({
        username,
        password
    });

    res.status(200).json({msg:"User created successfully"});
})

module.exports = router;