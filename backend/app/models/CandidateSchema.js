import { Schema, Types, model } from "mongoose";
import moment from "moment";

const CandidateSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        default: ""
    },
    dob: { type: Number },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: `Status value can not be {VALUE}, must be Male/Female}`
        },
    },
    age: { type: String },
    phone: { type: String },
    qualification: { type: String },
    experience: { type: String },
    languages: [String],
    salaryType: { type: String },
    salary: { type: Number },
    categories: { type: String },
    jobTitle: { type: String },
    description: { type: String },
    socials: [
        { name: String, url: String }
    ],
    contact: {
        address: String,
        location: String,
        mapLocation: String,
        cordinates: [Number],
    },
    introVideoUrl: String,
    createdAt: {
        type: Number,
        default: () => moment().unix(),
    },
    updatedAt: {
        type: Number,
        default: () => moment().unix(),
    },
});

const Candidate = model("Candidate", CandidateSchema);
export default Candidate;