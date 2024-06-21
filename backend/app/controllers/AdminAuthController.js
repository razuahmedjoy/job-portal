import httpStatus from "http-status";
import ApiError from "../../utils/errors/ApiError.js";
import { Admin, User } from "../models/index.js";
import { catchAsync, sendResponse } from "../../utils/helpers/global/index.js";
import { compareString } from "../../utils/helpers/bcrypt/index.js";
import { generateToken } from "../../utils/helpers/jwt/index.js";

const Signin = catchAsync(async (req, res) => {

    // parsing data
    const body = JSON.parse(req.body.data);
    const { email, password: reqPassword } = body;

    // checking email and password given
    if (!email || !reqPassword)
        throw new ApiError(httpStatus.BAD_REQUEST, 'Data not found!');

    // finding user
    const findUser = await Admin.findOne({ email: body.email }).lean();
    if (!findUser)
        throw new ApiError(httpStatus.NOT_FOUND, 'You are not a registered user!');

    // checking is valid password
    const isValidPassword = await compareString(reqPassword, findUser.password);
    if (!isValidPassword)
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Credential mismatch!');



    // generating token
    const token = generateToken(findUser);

    // user data to send with response
    const { password, ...pwd } = findUser;

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Login Success!',
        data: {
            accessToken: token,
            _id: pwd._id,
            name: pwd.name,
            role: pwd.role,
        },
    });
}
)

// profile of logged User
const Profile = catchAsync(
    async (req, res) => {

        // finding profile data
        const data = await Admin.findById(req.user?._id).select("-password");

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Admin Profile retrieved successfully!',
            data,
        });
    }
)

export default {
    Signin,
    Profile,
};