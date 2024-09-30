const express = require('express');
const authRoutes = require('./Routes/authRoutes');

const app = express();

app.use('/auth',authRoutes)

app.listen(8000,()=>{console.log('server started')});