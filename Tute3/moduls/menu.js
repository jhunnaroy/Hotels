const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Menu item name is required"],
        unique: true, // Ensures no duplicate menu items
        trim: true, // Removes extra spaces
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"], // Ensures no negative prices
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: [true, "Taste is required"],
        lowercase: true, // Converts input to lowercase
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: [],
        validate: {
            validator: function (value) {
                return value.every((ingredient) => typeof ingredient === 'string' && ingredient.trim() !== "");
            },
            message: "Ingredients must be a non-empty string array"
        }
    },
    num_sales: {
        type: Number,
        default: 0,
        min: [0, "Number of sales cannot be negative"],
    }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
