import { Router } from "express";
import { authCheck } from "../middlewares/auth-check.js";
import { getBalance, topUp, getAccount } from "../controllers/account.controller.js";

const router = Router()

router.get('/', authCheck(false), getAccount)
router.get('/balance', authCheck(false), getBalance)
router.post('/top-up', authCheck(false), topUp)

export default router