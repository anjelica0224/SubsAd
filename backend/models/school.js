import { Schema, model } from "mongoose";

const schoolSchema = new Schema({
    name: { type: String, required: true },
    operationalHours: { type: String },
    contactInfo: { type: String },
});

export default model("School", schoolSchema);
