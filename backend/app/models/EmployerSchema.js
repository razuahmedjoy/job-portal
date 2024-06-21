import { Schema, Types, model } from "mongoose";
import moment from "moment";

const EmployerSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User"
    },
    coverPhoto: {
        type: String
    },
    profilePhoto: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    foundedDate: {
        type: Number
    },
    companySize: {
        type: String
    },
    category: {
        type: String
    },
    introVideoUrl: {
        type: String
    },
    profileUrl: {
        type: String
    },
    about: {
        type: String
    },
    contact: {
        location: String,
        mapLocation: String,
        cordinates: [Number],
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

const Employer = model("Employer", EmployerSchema);
export default Employer;