import mysql from 'mysql2'
import 'dotenv/config'

export const connection = mysql.createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPass,
    database: process.env.dbName,
    port: 3306,
    ssl : {
        rejectUnauthorized: false
    },
    connectionLimit: 10
})
