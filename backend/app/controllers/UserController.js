import httpStatus from "http-status";
import { Candidate, Employer, User } from "../models/index.js";
import { catchAsync, sendResponse } from "../../utils/helpers/global/index.js";
import moment from "moment";
import returnFilePath from "../../utils/helpers/transforms/returnFilePath.js";
import { singleFileTransfer } from "../../utils/multer/fileTransfer.js";

const BlockUnBlockUser = catchAsync(
    async (req, res) => {

        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};

        const data = await User.findOneAndUpdate({ _id: req.params.userId }, {
            $set: {
                status: body.status,
                updatedAt: moment().unix()
            }
        }, { new: true, runValidators: true });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `User ${data.status ? 'blocked' : 'unblocked'} successfully!`,
            data,
        });
    }
)

const GetAllEmployers = catchAsync(
    async (req, res) => {

        // finding profile data
        const data = await Employer.find().populate({ path: "user", select: "-password" });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Employers retrieved successfully!',
            data,
        });
    }
)

const GetAllCandidates = catchAsync(
    async (req, res) => {

        // finding profile data
        const data = await Candidate.find().populate({ path: "user", select: "-password" });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Candidates retrieved successfully!',
            data,
        });
    }
)

const UpdateEmployer = catchAsync(
    async (req, res) => {

        const { employerId } = req.params;
        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};
        const findEmployer = await Employer.findOne({ _id: employerId });

        // getting the images path
        if (req.files && Object.keys(req.files).length > 0) {
            if (req.files.coverPhoto) {
                const imagePath = await returnFilePath.returnSingleFilePath(req.files, 'coverPhoto');

                // transfer images to new folder and assign new paths
                if (imagePath) {
                    const newImagePath = await singleFileTransfer(imagePath, "employerCoverPhoto")
                    body.coverPhoto = newImagePath;
                }
            }

            if (req.files.profilePhoto) {
                const imagePath = await returnFilePath.returnSingleFilePath(req.files, 'profilePhoto');

                // transfer images to new folder and assign new paths
                if (imagePath) {
                    const newImagePath = await singleFileTransfer(imagePath, "employerProfilePhoto")
                    body.profilePhoto = newImagePath;
                }
            }
        }

        // updating category info
        const data = await Employer.findOneAndUpdate({ _id: employerId }, {
            $set: {
                ...body,
                updatedAt: moment().unix()
            }
        }, { new: true, runValidators: true });

        // if updated and new image there remove the image
        if (data?._id && req.files) {
            if (req.files.coverPhoto) {
                await removeFile(findEmployer.coverPhoto);
            }
            if (req.files.profilePhoto) {
                await removeFile(findEmployer.profilePhoto);
            }
        }

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Employer updated successfully!',
            data,
        });
    }
)

const UpdateCandidate = catchAsync(
    async (req, res) => {

        const { candidateId } = req.params;
        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};

        // updating category info
        const data = await Candidate.findOneAndUpdate({ _id: candidateId }, {
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
    BlockUnBlockUser,
    UpdateEmployer,
    UpdateCandidate,
    GetAllEmployers,
    GetAllCandidates,
};