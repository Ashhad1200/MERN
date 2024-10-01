const express = require('express');
const authRoutes = require('./Routes/authRoutes');
const homeRoutes = require('./Routes/homeRoutes');

const app = express();

app.use('/auth',authRoutes)
app.use('/',homeRoutes)

app.listen(8000,()=>{console.log('server started')});