const express = require('express');
const connectDb = require('./DB/db');
const authRoutes = require('./Routes/authRoutes');
const homeRoutes = require('./Routes/homeRoutes');
const aboutRoutes = require('./Routes/aboutRoutes'); // Corrected here
const userRoutes = require('./Routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);

connectDb().then(() => {
    app.listen(8000, () => {
        console.log('server started');
    });
});
