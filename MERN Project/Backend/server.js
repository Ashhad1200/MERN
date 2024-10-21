const express = require('express');
const cors = require('cors');
const connectDb = require('./DB/db');
const authRoutes = require('./Routes/authRoutes');
const homeRoutes = require('./Routes/homeRoutes');
const aboutRoutes = require('./Routes/aboutRoutes');
const userRoutes = require('./Routes/userRoutes');
const feedBackRoutes = require('./Routes/feedBackRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/contactUs', feedBackRoutes);

connectDb().then(() => {
    app.listen(8000, () => {
        console.log('server started');
    });
});
