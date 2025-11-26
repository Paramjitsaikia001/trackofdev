import { SavedRoadmap } from "../models/savedRoadmap.model.js"
import asyncHandler from "../utills/asyncHandler.js"
import ApiError from "../utills/apiError.js"
import ApiResponse from "../utills/apiResponse.js"

const saveRoadmap = asyncHandler(async (req, res) => {
    const { roadmapRoute } = req.body

    const userId = req.user.id

    if (!roadmapRoute) {
        throw new ApiError(400, "roadmap routes are required")
    }

    const exist = await SavedRoadmap.findOne({ userId, roadmapRoute })

    if (exist) {
        throw new ApiError(409, "already exits")
    }

    const saved = await SavedRoadmap.create({ userId, roadmapRoute })

    res.status(200).json(
        new ApiResponse(
            200,
            saved,
            "roadmap is saved"
        )
    )

})


const getSavedRoadmapsOfUser = asyncHandler(async (req, res) => {
    const userId = req.user.id

    const savedRoadmaps = await SavedRoadmap.find({ userId })

    if (!savedRoadmaps || savedRoadmaps.length == 0) {
        throw new ApiError(404, "no saved roadmaps of this user found")
    }

    res.status(200).json(
        new ApiResponse(
            200,
            savedRoadmaps,
            "fetching all saved roadmap of this user is successfull"
        )
    )
})


const deleteSavedRoadmap = asyncHandler(async (req, res) => {
    const { roadmapRoute } = req.body

    const userId = req.user.id

    if (!roadmapRoute) {
        throw new ApiError(400, "roadmap routes are required")
    }

    await SavedRoadmap.findOneAndDelete({ userId, roadmapRoute })


    res.status(200).json(
        new ApiResponse(
            200,
            "roadmap is deleted"
        )
    )

})


export {getSavedRoadmapsOfUser,saveRoadmap,deleteSavedRoadmap}