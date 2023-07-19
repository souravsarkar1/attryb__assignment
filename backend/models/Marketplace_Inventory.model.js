const mongoose = require('mongoose');

const marketPlaceInventorySchmema = mongoose.Schema({
    carID: String,
    totalKms: Number,
    majorScratches: String,
    originalPaint: Boolean,
    numberofAccidentsReported: Number,
    numberofPreviousBuyers: Number,
    registrationPlace: String
})


const MarketPlaceInventoryModel = mongoose.model("marketPlaceInventory", marketPlaceInventorySchmema);
module.exports = { MarketPlaceInventoryModel };