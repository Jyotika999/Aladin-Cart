import express from 'express';
// const { param } = require('express/lib/request');
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config()
connectDB()
const app= express();

app.get('/', (req, res)=>{
    res.send('API is sending request');
});
app.get('/api/products', (req, res)=>{
    res.json(products);
});
app.get('/api/products/:id', (req, res)=>{
    const product= products.find(p=>p._id===req.params.id)
    res.json(product);
})

const PORT= process.env.PORT||5000
app.listen(PORT, console.log(`Server running int ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold));