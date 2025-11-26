import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            trim: true,

        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        fullName: {
            type: String,
            unique: false,
            required: true,

        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: false,

        },
        github: {
            type: String,
            required: false,

        },
        portfolio: {
            type: String,
            required: false,

        },
        Linkedin: {
            type: String,
            required: false,

        },
        Role: {
            type: String,
            enum: ['Student', 'Organisation', 'Developer', 'Employee'],
            default: 'Developer'
        },
        reviews: {
            type: Schema.Types.ObjectId,
            ref: "Reviews"
        },
        activity: {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        },
        savedRoadmap: {
            type: Schema.Types.ObjectId,
            ref: "Saved"
        },
        joinedDate: {
            type: Date,
            default: Date.now()
        },
        profilePicture: {
            type: String,
          
        },
        coverPicture: {
            type: String,
        },
        refreshToken: {
            type: String
        }


    },
    {
        timestamps: true
    }
)

//hashing the password before saving the document using bcrypt
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next()
})

//now we need to compare the userInputed password with the hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

//generating the access token -
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {

            _id: this._id,
            userName: this.userName,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACESS_TOKEN_EXPIN
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {

            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIN
        }
    )
}

export const User = mongoose.model("User", userSchema)