const express = require('express');
const app=express();
const PORT = 4578;
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://home2342home:home2342@cluster0.5ycwcyy.mongodb.net/")
.then(()=>{console.log("MongoDB connected succesfully")})
.catch(()=>{console.log("Error connecting to Mongo DB")});

app.get('/',(req,res)=>{
    res.send('Server is runnning');
});

app.get('/about',(req,res)=>{
    res.send('Server is in about');
});



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});