const express = require('express');
const cookieParser = require('cookie-parser');
const { connection } = require('./db');
const { userRoute } = require('./routes/user.routes');
const { dealerRoutes } = require('./routes/dealer.routes');
const { moeSpecsRoutes } = require('./routes/OME_Specs.routes');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/users', userRoute);
app.use('/dealer', dealerRoutes);
app.use('/cardata', moeSpecsRoutes);
app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log(`port is running at ${process.env.port}`);
        console.log("connected to db");
    } catch (error) {
        console.log(error.message);
        console.log("Sometthing went to wrong");
    }
})