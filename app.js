const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const body_parser = require('body-parser');
require('dotenv').config()

const customer = require('./routes/customerRoutes');
const product = require('./routes/productRoutes');

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(body_parser.json())
app.use(express.json())
app.use('/api1',customer)
app.use('/api2',product)

mongoose.connect('mongodb://localhost:27017/shopsaudb').then(
    ()=>{
        console.log("Database connected....");
    },
    (err)=>{
        console.log("Error : Database connection....");
    }
)

app.listen(PORT,()=>{
    console.log('Server running on port '+ PORT + ' ...');
})