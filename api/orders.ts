import express from 'express'
import { connection } from '../dbConnection';

const router = express.Router()
const env = process.env.NODE_ENV || 'development';

router.get("/", (req, res) => {
    connection.query('SELECT * from queue_order', (error, result, fields) => {
        if(error) throw error;

        res.json(result)

    })
})

export default router