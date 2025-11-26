import asyncHandler from "../utills/asyncHandler.js";
import ApiError from "../utills/apiError.js";
import ApiResponse from "../utills/apiResponse.js";
import { Activity } from "../models/activity.model.js"

const createActivity = asyncHandler(async (req, res) => {

    const { roadmpStepsId, roadmapId } = req.body
    const userId = req.user.id

    if (!roadmpStepsId || !roadmapId) {
        throw new ApiError(400, "roadmap step with roadmap id is required")
    }

    const exist = await Activity.findOne({ userId, roadmpStepsId, roadmapId })

    if (exist) {
        throw new ApiError(409, "this activity is already exists")
    }
    const activity = await Activity.create({ userId, roadmpStepsId, roadmapId })

    res.status(200).json(
        new ApiResponse(
            200,
            activity,
            "your activity is saved successfully"
        )
    )
})

const getUserActivity = asyncHandler(async (req, res) => {
    const userId  = req.user.id
console.log(userId);

    const userActivity = await Activity.find({ userId })

    if (!userActivity || userActivity.length == 0) {
        throw new ApiError(404, "no activity of yours")
    }

    res.status(200).json(
        new ApiResponse(
            200,
            userActivity,
            "you activity is fetched successfully"
        )
    )

})


const deleteActivity = asyncHandler(async (req, res) => {

    const { roadmpStepsId, roadmapId } = req.body
    const userId = req.user.id

    if (!roadmpStepsId) {
        throw new ApiError(400, "roadmap step id is required")
    }

    const exist = await Activity.findOneAndDelete({ userId, roadmpStepsId, roadmapId })

    res.status(200).json(
        new ApiResponse(
            200,
            exist,
            "your saved activity is deleted successfully"
        )
    )
})


export { createActivity, deleteActivity, getUserActivity }
