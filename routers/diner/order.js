import express from "express";
import io from '../../app.js';

// Global constants
const router = express.Router();

// Receive a food order (Diner)
router.post("", async (req, res) => {
  const { tableId, cart } = req.body;

  if (tableId && cart) {
    // Send a message though socket.io
    io.emit("FromAPI", req.body);
    return res.status(201).send();
  }

  return res.status(500).send();
});

export default router;
