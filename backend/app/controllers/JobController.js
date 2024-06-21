import httpStatus from "http-status";
import { Job } from "../models/index.js";
import { catchAsync, sendResponse } from "../../utils/helpers/global/index.js";
import returnFilePath from "../../utils/helpers/transforms/returnFilePath.js";
import { multipleFilesTransfer, singleFileTransfer } from "../../utils/multer/fileTransfer.js";
import moment from "moment";

const PostJob = catchAsync(
    async (req, res) => {

        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};

        // getting the images path
        if (req.files && Object.keys(req.files).length > 0) {
            if (req.files.single) {
                const imagePath = await returnFilePath.returnSingleFilePath(req.files, 'single');

                // transfer images to new folder and assign new paths
                if (imagePath) {
                    const newImagePath = await singleFileTransfer(imagePath, "jobsLogo")
                    body.logo = newImagePath;
                }
            }

            // upload images
            const imagePaths = await returnFilePath.returnMultipleFilePath(req.files);

            // transfer images to new folder and assign new paths
            let newImagePaths = [];
            if (imagePaths.length) {
                newImagePaths = await multipleFilesTransfer(imagePaths, "jobsPhotos")
                body.photos = newImagePaths;
            }
        }

        // saving
        const data = await Job.create({ ...body, employer: req.user?._id });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Employer retrieved successfully!',
            data,
        });
    }
)

const ApproveDisapproveJob = catchAsync(
    async (req, res) => {

        const { jobId } = req.params;
        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};

        const data = await Job.findOneAndUpdate({ _id: jobId }, {
            $set: {
                status: body.status,
                updatedAt: moment().unix()
            }
        }, { new: true, runValidators: true });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Job ${data.status ? 'approved' : "disapproved"} successfully!`,
            data,
        });
    }
)

const GetAllJobs = catchAsync(
    async (req, res) => {

        // finding profile data
        const data = await Job.find({ status: true });

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Jobs retrieved successfully!',
            data,
        });
    }
)

const GetAllJobsForLoggedUser = catchAsync(
    async (req, res) => {

        // finding profile data
        const data = await Job.find();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Jobs retrieved successfully!',
            data,
        });
    }
)

export default {
    PostJob,
    GetAllJobs,
    GetAllJobsForLoggedUser,
    ApproveDisapproveJob,
};