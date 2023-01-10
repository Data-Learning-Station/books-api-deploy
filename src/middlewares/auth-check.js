import { get } from '../dbhelper.js'

export const authCheck = (isAdmin) => {

    return async (req, res, next) => {
    
        const token = req.header('authorization')
    
        if (!token) {
            return res.status(401).json({
                message: "token not provided"
            })
        }
    
        const sql = 'SELECT * FROM users WHERE token = ?;'
        const user = await get(sql, [token])
    
        if (!user) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }

        if (isAdmin) {
            if (user.role != "admin") {
                return res.status(401).json({
                    message: "Access denied"
                })
            }
        }

        res.locals.user = user
        next()
    }
}