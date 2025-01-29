const mongoose = require('mongoose');

// Define the menu schema
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'], // Restrict values to these options
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String], // Expecting an array of strings
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});

// Create and export the MenuItem model
const MenuItem = mongoose.model('MenuItem', menuSchema);
module.exports = MenuItem;
