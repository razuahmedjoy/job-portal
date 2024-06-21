import { Schema, Types, model } from "mongoose";
import moment from "moment";
import { hashString } from "../../utils/helpers/bcrypt/index.js";
import { config } from "../../utils/server/index.js";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    role: {
        type: String,
        enum: {
            values: ['candidate', 'employer'],
            message: `Status value can not be {VALUE}, must be candidate/employer}`
        },
    },
    status: {
        type: Boolean,
        default: true,
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

// create or save works for both
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const password = this.password;
    const hashedPassword = await hashString(password, Number(config.BCRYPT_SALT_ROUND));

    this.password = hashedPassword;
    this.confirmPassword = undefined;

    next();
});

const User = model("User", UserSchema);
export default User;