import httpStatus from "http-status";
import { catchAsync, sendResponse } from "../../utils/helpers/global/index.js";
import { Apply, Job } from "../models/index.js";
import moment from "moment";
import ApiError from "../../utils/errors/ApiError.js";

const ApplyToJob = catchAsync(
    async (req, res) => {

        const { jobId } = req.params;
        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};

        const findApplicantToJob = await Apply.findOne({
            job: jobId,
            $or: [
                { candidate: body.candidate },
                { applyEmail: body.applyEmail }
            ]
        });
        if (findApplicantToJob)
            throw new ApiError(httpStatus.NOT_FOUND, 'You have already applied to this job!');

        const data = await Apply.create({ ...body, job: jobId });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Applied successfully!',
            data,
        });
    }
)

const ShortlistCandidate = catchAsync(
    async (req, res) => {

        const { applicantId } = req.params;
        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};

        // finding user
        const findApplicant = await Apply.findOne({ _id: applicantId }).select("job").lean();
        const findJob = await Job.findOne({ _id: findApplicant.job }).select("employer").lean();
        if (String(findJob.employer) !== String(req.user?._id))
            throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not under this job post!');

        const data = await Apply.findOneAndUpdate({ _id: applicantId }, {
            $set: {
                isShortlisted: body.isShortlisted,
                updatedAt: moment().unix()
            }
        }, { new: true, runValidators: true });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Candidate ${data.status ? 'shortlisted' : 'unshorted'} successfully!`,
            data,
        });
    }
)

const GetApplicantById = catchAsync(
    async (req, res) => {

        const { jobId } = req.params;
        const data = await Apply.find({ job: jobId }).populate([
            { path: "job", select: "" },
            {
                path: "candidate", select: "",
                populate: { path: "user", select: "-password -createdAt -updatedAt -__v" }
            },
        ]).lean();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Applicants retrived successfully successfully!`,
            data,
        });
    }
)

export default {
    ApplyToJob,
    GetApplicantById,
    ShortlistCandidate
};