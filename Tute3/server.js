const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const PersonRouter = require('./router/PersonRouter');
const MenuRouter = require('./router/Menuitem');
const { connectDB } = require('./db');

const app = express();

app.use(bodyParser.json()); // Move this AFTER app initialization

const PORT = process.env.PORT || 5006; // Use 5005 if 5004 is blocked

// Import routers


// Use routers
app.use('/person', PersonRouter);
app.use('/menu', MenuRouter);

// Start server
connectDB()
.then(() => {
  app.listen(PORT , () => {
    console.log("Server is running on port : ",PORT)
  })
})
.catch((err) => {
  console.log(`We can't start server becuase database connection failed due to this error : ${err}`)
})