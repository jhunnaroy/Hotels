const express = require('express');

const db = require('./db'); // Ensure correct path to database module

const app = express();
const PersonRouter=require('./router/PersonRouter');
app.use('/person',PersonRouter);
const MenuItem=require('./router/Menuitem')
app.use('/menu',MenuItem);



// Start the server
const PORT = 4002; // Use a different port if needed
app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});
