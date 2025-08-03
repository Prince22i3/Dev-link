require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const port = 3001;

const signinRouter = require('./routes/signin');
const {router:loginRouter,verifyToken} = require('./routes/login')

mongoose.connect("mongodb://127.0.0.1:27017/DevLink-Users");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser())

app.use('/signin',signinRouter);
app.use('/login',loginRouter);


app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
