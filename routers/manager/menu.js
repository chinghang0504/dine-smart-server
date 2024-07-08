import express from "express";
import initKnex from "knex";
import { development } from "../../knexfile.js";

// Global constants
const router = express.Router();
const knex = initKnex(development);

// Get all the food types (Manager)
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

// Create a new food type (Manager)
router.post("/foodtypes", async (req, res) => {
  let { type, image, priority } = req.body;
  if (!priority) {
    priority = null;
  }

  try {
    await knex("food_types").insert({ type, image, priority });

    return res.status(201).send();
  } catch {
    return res.status(500).send();
  }
});

// Delete a food type (Manager)
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

// Modify a food type (Manager)
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

// Get all the food items (Manager)
router.get("/fooditems", async (req, res) => {
  const { foodtype } = req.body;

  try {
    let foodItems;

    if (foodtype) {
      foodItems = await knex("food_items")
        .where("type", foodtype)
        .orderByRaw("priority IS NULL")
        .orderBy("priority");
    } else {
      foodItems = await knex("food_items")
        .orderBy("type")
        .orderByRaw("priority IS NULL")
        .orderBy("priority");
    }

    if (foodItems.length === 0) {
      return res.status(400).send();
    }

    return res.json(foodItems);
  } catch {
    return res.status(500).send();
  }
});

// Create a new food item (Manager)
router.post("/fooditems", async (req, res) => {
  let { name, description, price, image, priority, type } = req.body;
  if (!priority) {
    priority = null;
  }

  try {
    await knex("food_items").insert({
      name,
      description,
      price,
      image,
      priority,
      type,
    });

    return res.status(201).send();
  } catch {
    return res.status(500).send();
  }
});

// Delete a food item (Manager)
router.delete("/fooditems", async (req, res) => {
  const { id } = req.body;

  try {
    const rows = await knex("food_items").where("id", id).del();

    if (rows === 0) {
      return res.status(400).send();
    }

    return res.send();
  } catch {
    return res.status(500).send();
  }
});

// Modify a food item (Manager)
router.put("/fooditems", async (req, res) => {
  const { id, name, description, price, image, priority, type } = req.body;

  try {
    const rows = await knex("food_items").where("id", id).update({
      name,
      description,
      price,
      image,
      priority,
      type,
    });

    if (rows === 0) {
      return res.status(400).send();
    }

    return res.send();
  } catch {
    return res.status(500).send();
  }
});

export default router;
