const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const userModle = require('../models/signin')

const pass = process.env.secretkey;

router.post('/', async (req,res)=>{
    const {username,password} = req.body;
    const user = await userModle.findOne({username});
    if(!user||user.password!==password){
        return res.status(401).json({msg:"Invalid username or password"})
    }
    const token = jwt.sign({ username, id: user._id }, pass, { expiresIn: '6h' });

    res.cookie('token', token, {
        httpOnly:true,
        secure:false,
        maxAge:3600000,
    })

    res.status(200).json({msg:"login successful"})
})

function verifyToken(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({msg:"Token not found"})
    }
    jwt.verify(token, pass, (err,user)=>{
        if(err) {
            return res.status(403).json({msg:"A token mis-match occured"})
        }
        req.user=user;
        next();
    })
}

module.exports = {router,verifyToken};