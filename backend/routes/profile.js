const express = require('express');
const router = express.Router();
const profileModel = require('../models/userprofile');

router.post('/', async(req,res)=>{
    try{
        const newProfile = new profileModel(req.body); 
        await newProfile.save();
        res.status(200).json({msg:"Successfully created"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:"Server error while creating profile"});
    }
})
router.put('/', async (req,res)=>{
    try{
        const username = req.cookies.username;

        if(!username){
            return res.status(401).json({msg: "No username cookie found"});
        }
        const updateData = req.body;

        const updatedProfile = await profileModel.findOneAndUpdate(
            {username},
            updateData,
            {new: true, upsert: false}
        );
        if(!updatedProfile){
            return res.status(404).setDefaultEncoding({error: "Profile not found"});
        }

    }
    catch(err){
        console.error(err);
        res.status(500).json({error:"server error while updating profile"})
    }
})

module.exports = router;