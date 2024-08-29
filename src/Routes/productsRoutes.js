import { Router } from "express";
import { addProd } from "../Controller/productsController.js";
import { listOfProd } from "../Controller/productsController.js";

const router = Router()

router.post('/addProducts',addProd)

router.get('/listOfProducts', listOfProd)

export default router 
