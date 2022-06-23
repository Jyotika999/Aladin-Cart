import express from "express";
const router = express.Router()
import { protect } from "../middleWare/authMiddleware.js";
import addOrderItems from '../controllers/order_controller.js'

router.route('/').post(protect, addOrderItems)

export default router;