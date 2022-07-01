import express from "express";
const router = express.Router()
import {getProducts, getProductBYId, deleteProduct, updateProduct, createProduct} from '../controllers/product_controller.js'
import { protect, admin } from '../middleWare/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductBYId).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

export default router;