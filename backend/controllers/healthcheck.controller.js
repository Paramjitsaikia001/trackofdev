import ApiResponse from "../utills/apiResponse.js";
import ApiError from "../utills/apiError.js";
import asyncHandler from "../utills/asyncHandler.js";
const healthCheck =asyncHandler(async(req,res)=>{
     res.status(200).json(
        new ApiResponse(200,"good to go")
    )
    
})

export default healthCheck;