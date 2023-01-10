import { Router } from "express";
import usersRoutes from './users.routes.js'
import booksRoutes from './books.routes.js'
import accountRoutes from './account.routes.js'
import orderRoutes from './orders.routes.js'

const router = Router()

router.use(usersRoutes)
router.use('/books', booksRoutes)
router.use('/account', accountRoutes)
router.use('/order', orderRoutes)

export default router