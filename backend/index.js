const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;

const signinRouter = require('./routes/signin');

mongoose.connect("mongodb://127.0.0.1:27017/DevLink-Users");

app.use(cors());
app.use(express.json());

app.use('/',signinRouter);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})