import express, { Application } from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import orders from './api/orders'
const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());

app.use('/api/orders', orders);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})