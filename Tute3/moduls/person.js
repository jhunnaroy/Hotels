const mongoose = require('mongoose');

// Define the Person schema
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: [true, 'Work is required']
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required'],
        min: [0, 'Salary must be a positive number']
    }
});




// Create Person model
const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
