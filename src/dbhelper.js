import sqlite3 from "sqlite3"

sqlite3.verbose()

const db = new sqlite3.Database('./database.db')

export function all(sql, params) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(rows)
            }
        })
    })
}

export function get(sql, params) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(row)
            }
        })
    })
}

export function run(sql, params) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve()
            }
        })
    })
}