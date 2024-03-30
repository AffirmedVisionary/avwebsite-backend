const express = require('express');
const app = express();
require('dotenv').config();

console.log('Starting server...');

// DB Connection
try {
    require('./config/db');
    console.log('Database connection successful');
} catch (error) {
    console.error('Database connection failed', error);
    process.exit(1); // Exit if DB connection fails
}

// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

const PORT = process.env.PORT || 3000; // Changed default port to 3000 for testing

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
});
