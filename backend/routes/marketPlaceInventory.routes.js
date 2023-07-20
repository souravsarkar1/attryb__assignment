const express = require('express');
const { MarketPlaceInventoryModel } = require('../models/Marketplace_Inventory.model');
const setCarID = require('../middleware/setCarId.middleware');

const marketPlaceInventoryRoutes = express.Router();

marketPlaceInventoryRoutes.use(setCarID);

marketPlaceInventoryRoutes.get('/', async (req, res) => {
    try {
        const carsDeteals = await MarketPlaceInventoryModel.find({ carID: req.body.carID });
        return res.status(200).json({ carsDeteals });
    } catch (error) {
        res.status(400).json({ msg: error })
    }
})

marketPlaceInventoryRoutes.post('/add', async (req, res) => {
    try {
        const registerCar = await MarketPlaceInventoryModel.findOne({ carID: req.body.carID });
       // console.log(registerCar);
        if (registerCar) {
            res.status(200).json({ msg: "Car is already added" });
        } else {
            const newCar = await MarketPlaceInventoryModel.create(req.body);
            res.status(200).json({ msg: "New car details added", newCar });
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});


module.exports = {marketPlaceInventoryRoutes}