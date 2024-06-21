import httpStatus from "http-status";
import { Candidate } from "../models/index.js";
import { catchAsync, sendResponse } from "../../utils/helpers/global/index.js";
import moment from "moment";

const GetLoggedCandidate = catchAsync(
    async (req, res) => {

        const data = await Candidate.findOne({ user: req.user?._id }).select("-password");

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Candidate retrieved successfully!',
            data,
        });
    }
)

const UpdateCandidate = catchAsync(
    async (req, res) => {

        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};

        // updating category info
        const data = await Candidate.findOneAndUpdate({ user: req?.user?._id }, {
            $set: {
                ...body,
                updatedAt: moment().unix()
            }
        }, { new: true, runValidators: true });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Candidate updated successfully!',
            data,
        });
    }
)

export default {
    GetLoggedCandidate,
    UpdateCandidate,
};