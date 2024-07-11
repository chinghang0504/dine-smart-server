import express from "express";
import cors from "cors";
import "dotenv/config";
import menuRouter from "./routers/diner/menu.js";
import managerMenuRouter from "./routers/manager/menu.js";
import orderRouter from "./routers/diner/order.js";

// Global constants
const LISTENING_PORT = process.env.LISTENING_PORT || 8080;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routers
app.use("/diner/menu", menuRouter);
app.use("/diner/order", orderRouter);
app.use("/manager/menu", managerMenuRouter);

// Testing
app.get("/", (_req, res) => {
  return res.send("Testing");
});

// Listening Port
app.listen(LISTENING_PORT, () => {
  console.log(`The server is running on the port ${LISTENING_PORT}`);
});
