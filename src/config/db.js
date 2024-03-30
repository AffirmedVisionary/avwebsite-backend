const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBURL = process.env.DATABASE_URL;

mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));
