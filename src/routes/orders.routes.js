import { Router } from "express";
import { authCheck } from "../middlewares/auth-check.js";
import { orderBook, userOrders } from '../controllers/orders.controller.js'

const router = Router()
// order
// { bookId: 3, count: 5 }
router.post('/', authCheck(false), orderBook)
router.get('/', authCheck(false), userOrders)

export default router



