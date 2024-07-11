import express from "express";
import cors from "cors";
import "dotenv/config";
import { createServer } from "http";
import { Server } from "socket.io";
import menuRouter from "./routers/diner/menu.js";
import managerMenuRouter from "./routers/manager/menu.js";
import orderRouter from "./routers/diner/order.js";

// Global constants
const LISTENING_PORT = process.env.LISTENING_PORT || 8080;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Connection established");

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

app.set("port", process.env.PORT || 5000);

httpServer.listen(app.get("port"), function () {
  var port = httpServer.address().port;
  console.log("Running on : ", port);
});

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

export default io;
