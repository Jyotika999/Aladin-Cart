import express from "express";
const router = express.Router()
import { authUser, registerUser, getUserProfile } from '../controllers/user_controller.js'
import { protect } from '../middleWare/authMiddleware.js'

router.post('/login', authUser)
router.route('/').post(registerUser)
router.route('/profile').get(protect, getUserProfile)


export default router;
