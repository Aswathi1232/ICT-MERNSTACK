const express = require('express')

const mongoose = require("mongoose")

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://aswathi1232:aswathi123@cluster0.qdbzrta.mongodb.net/product')
    .then(() => {
        console.log("DB connected")
    })
    .catch(err => {
        
    })

