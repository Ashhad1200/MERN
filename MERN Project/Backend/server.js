const express = require('express');
const cors = require('cors');
const connectDb = require('./DB/db');
const authRoutes = require('./Routes/authRoutes');
const homeRoutes = require('./Routes/homeRoutes');
const aboutRoutes = require('./Routes/aboutRoutes');
const userRoutes = require('./Routes/userRoutes');
const feedBackRoutes = require('./Routes/feedBackRoutes');
const verifyToken = require('./MiddleWare/auth');
const servicesRoutes = require('./Routes/servicesRoutes');
// Import the middleware
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Public routes (no token required)
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/auth', authRoutes);

// Protected routes (token required)
app.use('/user', verifyToken, userRoutes);       // Apply middleware to protect `/user`
app.use('/contactUs', verifyToken, feedBackRoutes); // Protect `/contactUs`
app.use('/services', verifyToken, servicesRoutes);

// Start the database and server
connectDb().then(() => {
    app.listen(8000, () => {
        console.log('server started');
    });
});
