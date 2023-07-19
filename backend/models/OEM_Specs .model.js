const mongoose = require('mongoose');

const OEM_SpecsSchema = mongoose.Schema({
    "img" : String,
    "model_name": String,
    "year_of_model": Number,
    "list_price": Number,
    "available_colors": [String],
    "mileage": Number,
    "power_bhp": Number,
    "max_speed": Number,
    "dealer_name": String,
    "dealer_email": String,
    "userID" : String
}, {
    versionKey: false
}
)

const OEMSpecsModel = mongoose.model("OEM_Specs", OEM_SpecsSchema);

module.exports = { OEMSpecsModel }