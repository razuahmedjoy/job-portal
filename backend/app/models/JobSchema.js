import { Schema, Types, model } from "mongoose";
import moment from "moment";

const JobSchema = new Schema({
    employer: {
        type: Types.ObjectId,
        ref: "Employer",
        required: [true, 'employer id is required'],
    },
    logo: {
        type: String,
        required: [true, 'logo is required'],
    },
    title: {
        type: String,
        required: [true, 'job title is required'],
    },
    description: {
        type: String,
        required: [true, 'job description is required'],
    },
    category: {
        type: String,
        required: [true, 'job category is required'],
    },
    type: {
        type: String,
        required: [true, 'job type is required'],
    },
    tag: {
        type: String,
        required: [true, 'job tag is required'],
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female'],
            message: `Status value can not be {VALUE}, must be Male/Female}`
        },
    },
    applyType: {
        type: String,
        required: [true, 'job apply type is required'],
    },
    externalUrl: {
        type: String,
        // required: [true, 'job external url is required'],
    },
    applyEmail: {
        type: String,
        // required: [true, 'job apply email is required'],
    },
    salaryType: {
        type: String,
        required: [true, 'job salary type  is required'],
    },
    minSalary: Number,
    maxSalary: Number,
    experience: {
        type: String,
        required: [true, 'job experience is required'],
    },
    careerLevel: {
        type: String,
        required: [true, 'job career level is required'],
    },
    qualification: {
        type: String,
        required: [true, 'job qualification is required'],
    },
    introUrl: {
        type: String,
        // required: [true, 'job intro url is required'],
    },
    photos: [String],
    deadlineDate: {
        type: Number,
        required: [true, 'job deadline date is required'],
    },
    friendlyAddress: {
        type: String,
        // required: [true, 'job intro url is required'],
    },
    contact: {
        location: String,
        mapLocation: String,
        cordinates: [Number],
    },
    status: {
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

const Job = model("Job", JobSchema);
export default Job;