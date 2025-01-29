const mongoose = require('mongoose');
// Define the mongoose connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// Connect to MongoDB with recommended options
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to database');
});
db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected from database');
});

module.exports = db;
