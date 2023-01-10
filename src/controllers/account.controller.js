import { get, run } from "../dbhelper.js"

export const getBalance = (req, res) => {

    const { username, balance } = res.locals.user

    res.json({
        message: username + " balance",
        balance
    })
}

/**
 * {
 *  "amount": -10
 * }
 */
export const topUp = async (req, res) => {
    const { amount } = req.body

    if (amount <= 0) {
        return res.status(400).json({
            message: "Cannot top up balance to  < 0 amount"
        })
    }

    const sql = 'UPDATE users SET balance = balance + ? WHERE id = ?;'
    const getSql = 'SELECT balance FROM users WHERE id = ?'

    await run(sql, [amount, res.locals.user.id])
    const user = await get(getSql, [res.locals.user.id])

    res.json({
        message: "Balance updated",
        balance: user.balance
    })
}