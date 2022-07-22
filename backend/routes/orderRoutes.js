import express from "express";
const router = express.Router()
import { protect, admin } from "../middleWare/authMiddleware.js";
import {addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, getOrders} from '../controllers/order_controller.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router;