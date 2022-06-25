import express from "express";
const router = express.Router()
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers } from '../controllers/user_controller.js'
import { protect, admin } from '../middleWare/authMiddleware.js'

router.post('/login', authUser)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


export default router;
