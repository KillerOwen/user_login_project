import express from "express";
import User from "../models/user.model.js";
import {signupUser, loginUser, getUser, logoutUser} from "../controllers/user.controller.js"
import requireAuth from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/me', requireAuth, getUser);
router.post('/logout', logoutUser);

export default router;