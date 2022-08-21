const express = require("express");
const app = require ("express");
const connectDB = require ("./config/db");



app =  express();
connectDB();






app.get("/", (req,res)=>{

    res.send ("API IS RUNNING");
});
