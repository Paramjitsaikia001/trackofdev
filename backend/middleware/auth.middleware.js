//verifying the tokens after geting the user details

import ApiError from "../utills/apiError.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import asyncHandler from "../utills/asyncHandler.js";


/**
 * fetching the token from the cookies and req.header
 * if the token exist
 * verify the token with accestokensecrect using jwt and if any error required then will be error send
 * get the user details from the db using id
 * checking the user 
 * assign in req.user
 * pass using next()
 * 
 */

export const verifyJWT = asyncHandler(async (req, _, next) => {

    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log(req.cookies?.accessToken,"token from cookie",req.header("Authorization")?.replace("Bearer ", ""),"token from header",token
        );
        
        // if (typeof token !== "string") {
        //     throw new ApiError(401, "Invalid token format");
        // }
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }

        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

        if (!user) {
            throw new ApiError(401, "invalid accessToken")
        }

        req.user = user
        next()


    } catch (err) {
        throw new ApiError(401, err?.message || "token is invalid")
    }
})