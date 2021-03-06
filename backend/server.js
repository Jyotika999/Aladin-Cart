import express from 'express';
import connectDB from './config/db.js';
import path from 'path'
import colors from 'colors';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleWare/errorMiddleware.js';
import uploadRoutes from './routes/uploadRoutes.js'
import dotenv from 'dotenv';

dotenv.config()
connectDB()
const app= express();

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API is sending request');
});

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.get('/api/config/paypal', (req, res)=> res.send(process.env.PAYPAL_CLIENT_ID))


const __dirname= path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)

app.use(errorHandler)

const PORT= process.env.PORT||5000
app.listen(PORT, console.log(`Server running int ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold));