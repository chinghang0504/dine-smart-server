import express from "express";
import initKnex from "knex";
import { development } from "../knexfile.js";

// Global constants
const router = express.Router();
const knex = initKnex(development);

// Get the menu of food types
router.get('/foodtypes', async (req, res) => {
    const foodTypes = await knex
        .select('T.type', 'T.image')
        .from('food_types as T')
        .orderBy('T.priority');
    return res.json(foodTypes);
});

// Get the menu of food items
router.get('/fooditems', async (req, res) => {
    // Get the food types from the database
    const foodTypes = await knex('food_types');

    // Create a menu
    const menu = {};

    // Create an array for each type
    foodTypes.forEach((row) => {
        menu[row.type] = [];
    })

    // Get the food items from the database
    const foodItems = await knex
      .select('T.type', 'I.id', 'I.name', 'I.description', 'I.price', 'I.image')
      .from('food_types as T')
      .join('food_items as I', 'T.type', 'I.type')
      .orderBy(['T.priority', 'I.priority']);

    // Insert the food items into its array
    foodItems.forEach((row) => {
        const { type, id, name, description, price, image } = row;
        menu[type].push({ id, name, description, price, image });
    })

    return res.json(menu);
});

export default router;
