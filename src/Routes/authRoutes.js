import { Router } from "express";
import { login } from "../Controller/authController.js";
import { signUp } from "../Controller/authController.js";

const router = Router()

router.post('/login',login)

router.post('/signUp',signUp)

export default router   