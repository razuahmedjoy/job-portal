import httpStatus from "http-status";
import { Employer } from "../models/index.js";
import { catchAsync, sendResponse } from "../../utils/helpers/global/index.js";
import returnFilePath from "../../utils/helpers/transforms/returnFilePath.js";
import { singleFileTransfer } from "../../utils/multer/fileTransfer.js";
import moment from "moment";
import removeFile from "../../utils/multer/removeFile.js";

const GetLoggedEmployer = catchAsync(
    async (req, res) => {

        const data = await Employer.findOne({ user: req.user?._id }).select("-password");

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Employer updated successfully!',
            data,
        });
    }
)

const UpdateEmployer = catchAsync(
    async (req, res) => {

        const body = req.body && req.body.data ? JSON.parse(req.body.data) : {};
        const findEmployer = await Employer.findOne({ user: req?.user?._id });

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
        const data = await Employer.findOneAndUpdate({ user: req?.user?._id }, {
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
            message: 'Employer retrieved successfully!',
            data,
        });
    }
)

export default {
    GetLoggedEmployer,
    UpdateEmployer,
};