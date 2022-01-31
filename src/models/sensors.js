import { string } from "joi";
import mongoose, { Schema } from "mongoose";

const sensors = new Schema({
    sensorId: { type: String },
    sensorName: { type: String },
    location: { type: String },
    status: { type: String },
    description: { type: String }

});

export default mongoose.model("sensors", sensors);