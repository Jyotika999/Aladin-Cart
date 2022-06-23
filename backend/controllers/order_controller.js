import asyncHandler from 'express-async-handler'
import Order from '../Models/orderModel.js'


// @desc: create new orders
// @route: post/api/orders
// @access: private

const addOrderItems = asyncHandler( async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice} = req.body

    if(orderItems && orderItems.len===0){
        res.status(400)
        throw new Error('No Order Items')
        return
    }
    else{
        const order= new Order({
            orderItems, 
            user: req.user._id, 
            shippingAddress, 
            paymentMethod, 
            itemsPrice, 
            taxPrice, 
            shippingPrice, 
            totalPrice,
        })

        const createdOrder= await order.save()
        res.status(201).json(createdOrder)
    }
})

export default addOrderItems