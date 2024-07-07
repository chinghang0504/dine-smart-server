import express from "express";
import initKnex from "knex";
import { development } from "../../knexfile.js";

// Global constants
const router = express.Router();
const knex = initKnex(development);

// Get all the food types (Diner)
router.get("/foodtypes", async (_req, res) => {
  try {
    const foodTypes = await knex("food_types")
      .select("type", "image")
      .orderByRaw("priority IS NULL")
      .orderBy("priority");
    return res.json(foodTypes);
  } catch {
    return res.status(500).send();
  }
});

// Get all the food items (Diner)
router.get("/fooditems", async (req, res) => {
  const { foodtype } = req.body;

  try {
    const foodItems = await knex("food_items")
      .select("id", "name", "description", "price", "image")
      .where("type", foodtype)
      .orderByRaw("priority IS NULL")
      .orderBy("priority");

    if (foodItems.length === 0) {
      return res.status(400).send();
    }

    return res.json(foodItems);
  } catch {
    return res.status(500).send();
  }
});

export default router;
