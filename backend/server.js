const express= require('express');
const { param } = require('express/lib/request');
const products= require('./data/products');

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

app.listen(process.env.PORT||5000, console.log('Server running on port: 5000'));