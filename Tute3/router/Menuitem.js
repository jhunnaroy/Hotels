const express = require('express');
const router = express.Router();
const MenuItem = require('./../moduls/menu');
const bodyParser = require('body-parser');

// Middleware to parse JSON requests
router.use(bodyParser.json());

// POST route to create a new menu item
router.post('/menu', async (req, res) => {
    try {
        const data = req.body;

        // Create a new MenuItem document using the Mongoose model
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();

        console.log('Data saved:', response);
        res.status(201).json(response); // Use status 201 for resource creation
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// GET route to fetch all menu items
router.get('/menu', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Data fetched:', data);

        res.status(200).json(data); // Send the fetched data as the response
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// This is modified file

module.exports = router;
