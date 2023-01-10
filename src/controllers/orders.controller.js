import { get, run, all } from "../dbhelper.js"

export const orderBook = async (req, res) => {
    const user = res.locals.user
    const userId = user.id
    const { bookId, count } = req.body
    const priceSql = 'SELECT price FROM books WHERE id = ?'
    const book = await get(priceSql, [bookId])
    const price = book.price
    const allAmount = price * count
    if (allAmount > user.balance) {
        return res.status(403).json({
            message: "Not enought money, top up your balance (Ishla uka, puling yu`q)"
        })
    }
    const minusBalanceSql = 'UPDATE users SET balance = balance - ? WHERE id = ?'
    await run(minusBalanceSql, [allAmount, userId])

    const date = new Date().toDateString()
    const sql = `INSERT INTO orders (userId, bookId, count, price, date) VALUES (?, ?, ?, ?, ?);`

    await run(sql, [userId, bookId, count, price, date])

    res.json({
        message: "Book is ordered"
    })
}

export const userOrders = async (req, res) => {

    const userId = res.locals.user.id

    // name, description, price, count, date
    const sql = `SELECT 
    books.name AS name, books.description AS description,
    orders.price as price, orders.count as count, orders.date as date
    FROM orders 
    INNER JOIN books ON orders.bookId = books.id 
    WHERE orders.userId = ?
    `

    const orders = await all(sql, [userId])

    res.status(200).json({
        message: "Your orders",
        orders
    })
}