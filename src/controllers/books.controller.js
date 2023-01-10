import { all, run } from "../dbhelper.js"

export const getBooks = async (req, res) => {
    
    const sql = 'SELECT * FROM books;'
    
    const rows = await all(sql)

    res.status(200).json({
        message: "All books for user " + res.locals.user.name,
        books: rows
    })
}

export const createBook = async (req, res) => {
    const { name, description, price } = req.body

    const sql = `INSERT INTO books(name, description, price) 
    VALUES (?, ?, ?);`

    await run(sql, [name, description, price])
    
    res.status(201).json({
        message: "Book created"
    })
}

export const updateBook = async (req, res) => {

    const id = +req.params.id

    const { name, description, price } = req.body

    const sql = `UPDATE books SET name = ?, description = ?, price = ? WHERE id = ?;`

    await run(sql, [name, description, price, id])
    
    res.status(201).json({
        message: "Book updated"
    })
}

export const deleteBook = async (req, res) => { 
    const id = +req.params.id

    const sql = `DELETE FROM books WHERE id = ?;`

    await run(sql, [id])

    res.status(201).json({
        message: "Book deleted"
    })
}