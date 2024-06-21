import { Schema, Types, model } from "mongoose";
import moment from "moment";

const ApplySchema = new Schema({
    candidate: {
        type: Types.ObjectId,
        ref: "Candidate"
    },
    job: {
        type: Types.ObjectId,
        ref: "Job",
        required: [true, 'job id is required'],
    },
    email: {
        type: String,
    },
    isShortlisted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Number,
        default: () => moment().unix(),
    },
    updatedAt: {
        type: Number,
        default: () => moment().unix(),
    },
});

const Apply = model("Apply", ApplySchema);
export default Apply;