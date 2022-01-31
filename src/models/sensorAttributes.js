import mongoose, { Schema } from "mongoose";

const sensorAttributes = new Schema({
    sensorId: { type: String },
    name: { type: String },
    sensorType: { type: String },
    metrics: { type: String },
    description: { type: String }
});

export default mongoose.model("sensorAttributes", sensorAttributes);