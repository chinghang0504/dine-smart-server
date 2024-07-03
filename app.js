import express from "express";
import cors from "cors";
import 'dotenv/config';
import menuRouter from './routers/menu.js';

// Global constants
const LISTENING_PORT = process.env.LISTENING_PORT || 8080;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routers
app.use('/menu', menuRouter);

// Testing
app.get("/", (req, res) => {
    return res.send('Testing');
});

// Listening Port
app.listen(LISTENING_PORT, () => {
    console.log(`The server is running on the port ${LISTENING_PORT}`);
});
