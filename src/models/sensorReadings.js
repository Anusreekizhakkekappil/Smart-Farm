import mongoose, { Schema } from "mongoose";

const sensorReadings = new Schema({
    entry: { type: String },
    time: { type: String },
    sensorId: { type: String },
    sensorType: { type: String },
    value: { type: String }
});

export default mongoose.model("sensorReadings", sensorReadings);