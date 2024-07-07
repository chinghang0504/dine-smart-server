import express from "express";
import initKnex from "knex";
import { development } from "../knexfile.js";

// Global constants
const router = express.Router();
const knex = initKnex(development);

// Get the menu of food types
router.get('/foodtypes', async (req, res) => {
    const foodTypes = await knex('food_types')
        .select('type', 'image')
        .orderBy('priority');
    return res.json(foodTypes);
});

// Get the menu of food items
router.get('/fooditems', async (req, res) => {
    const { foodtype } = req.body;

    const foodItems = await knex('food_items')
        .select('id', 'name', 'description', 'price', 'image')
        .where('type', foodtype)
        .orderBy('priority');

    if (foodItems.length === 0) {
        return res.status(400).send();
    }

    return res.json(foodItems);
});

export default router;
