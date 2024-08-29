import { Router } from "express";
import {addUser} from "../Controller/usersController.js";
import {getAllUser} from "../Controller/usersController.js";

const router = Router()

router.post('/food',addUser)

router.get('/getAllUser',getAllUser)

export default router