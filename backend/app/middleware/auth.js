import ApiError from "../../utils/errors/ApiError.js";
import httpStatus from "http-status";
import { verifyToken } from "../../utils/helpers/jwt/index.js";
import { config } from "../../utils/server/index.js";
import { User, Admin } from "../models/index.js";
import { admin, candidate, employer } from "../../utils/constants/constants.js";

export default (...requiredRoles) => async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access');

        // getting token
        const token = authHeader.split(' ')[1];

        // verify token
        let verifiedUser = null;
        verifiedUser = verifyToken(token, config.TOKEN_SECRET);

        if (verifiedUser.role === employer || verifiedUser.role === candidate) {
            const findUser = await User.findById(verifiedUser._id);
            if (!findUser)
                throw new ApiError(httpStatus.UNAUTHORIZED, 'Please check you are authorized');
        }

        if (verifiedUser.role === admin) {
            const findUser = await Admin.findById(verifiedUser._id);
            if (!findUser)
                throw new ApiError(httpStatus.UNAUTHORIZED, 'Please check you are authorized');
        }

        req.user = verifiedUser; // email, _id, business

        // role diye guard korar jnno
        if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
            throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
        }

        next();
    } catch (error) {
        next(error);
    }
}