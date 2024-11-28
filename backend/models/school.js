import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    operationalHours: { type: String },
    contactInfo: { type: String },
    gardes_upto: { type: [String] },
});

const adminModel = mongoose.models.user || mongoose.model("admin", schoolSchema)

export default adminModel;