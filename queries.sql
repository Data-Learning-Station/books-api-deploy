-- SQLite

-- ALTER TABLE users ADD role VARCHAR(10);

-- UPDATE users SET role = 'admin' WHERE id = 1;


-- ALTER TABLE users ADD balance REAL;
-- UPDATE users SET balance = 0;

-- UPDATE users SET balance = balance + 1 WHERE id = 1;

CREATE TABLE orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    bookId INTEGER,
    count INTEGER,
    price REAL,
    date  TEXT DEFAULT CURRENT_TIMESTAMP
);
