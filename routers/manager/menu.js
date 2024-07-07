import express from "express";
import initKnex from "knex";
import { development } from "../../knexfile.js";

// Global constants
const router = express.Router();
const knex = initKnex(development);

// Get all the food types
router.get("/foodtypes", async (_req, res) => {
  try {
    const foodTypes = await knex("food_types")
      .orderByRaw("priority IS NULL")
      .orderBy("priority");
    return res.json(foodTypes);
  } catch {
    return res.status(500).send();
  }
});

// Create a new food type
router.post("/foodtypes", async (req, res) => {
  const { type, image, priority } = req.body;

  try {
    await knex("food_types").insert({ type, image, priority });

    return res.status(201).send();
  } catch {
    return res.status(500).send();
  }
});

// Delete a food type
router.delete("/foodtypes", async (req, res) => {
  const { id } = req.body;

  try {
    const rows = await knex("food_types").where("id", id).del();

    if (rows === 0) {
      return res.status(400).send();
    }

    return res.send();
  } catch {
    return res.status(500).send();
  }
});

// Modify a food type
router.put("/foodtypes", async (req, res) => {
  const { id, type, image, priority } = req.body;

  try {
    const rows = await knex("food_types").where("id", id).update({
      type,
      image,
      priority,
    });

    if (rows === 0) {
      return res.status(400).send();
    }

    return res.send();
  } catch {
    return res.status(500).send();
  }
});

// Get all the food items

// Create a new food item

// Delete a food item

// Modify a food item

export default router;
