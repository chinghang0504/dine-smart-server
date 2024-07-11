import express from "express";
import initKnex from "knex";
import { development } from "../../knexfile.js";

// Global constants
const router = express.Router();
const knex = initKnex(development);

// Receive a food order (Diner)
router.post("", async (req, res) => {
  const { cart } = req.body;

  if (cart) {
    return res.status(201).send();
  }

  return res.status(500).send();
});

export default router;
