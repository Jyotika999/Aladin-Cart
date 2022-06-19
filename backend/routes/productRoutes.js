import express from "express";
const router = express.Router()
import {getProducts, getProductBYId} from '../controllers/product_controller.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductBYId)

export default router;