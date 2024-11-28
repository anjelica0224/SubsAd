const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    operationalHours: { type: String },
    contactInfo: { type: String },
});

module.exports = mongoose.model("School", schoolSchema);
