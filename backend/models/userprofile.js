const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true},
    github:{type:String, unique:true},
    linkedln:{type:String, unique:true},
    x:{type:String, unique:true},
    instagram:{type:String, unique:true},
    youtube:{type:String, unique:true},
    languages:{type:String},
    interests:{type:String},
})

const profileModel = mongoose.model("Profile", profileSchema);

module.exports = profileModel;