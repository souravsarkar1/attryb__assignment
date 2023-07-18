const mongoose = require('mongoose');

const dealerSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    pass: { type: String, require: true },
    city: { type: String, require: true },
    age: { type: Number, require: true },
}, {
    versionKey: false
})

const DealerUserModel = mongoose.model('dealer', dealerSchema);

module.exports = { DealerUserModel };