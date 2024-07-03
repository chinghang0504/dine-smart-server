import express from "express";
import fs from "fs";

// Global constants
const router = express.Router();
const menuFile = './assets/data/menu.json';

// Get the menu
router.get('/', (req, res) => {
    const str = fs.readFileSync(menuFile, 'utf-8')
    return res.json(JSON.parse(str));
});

export default router;
