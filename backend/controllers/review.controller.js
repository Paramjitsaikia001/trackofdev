// where i user can give reviews to an specific roadmap and get the reviews of a users

import { Review } from "../models/review.model.js"
import asyncHandler from "../utills/asyncHandler.js"
import ApiResponse from "../utills/apiResponse.js"
import ApiError from "../utills/apiError.js"

const addReviews = asyncHandler(async (req, res) => {

    const { reviewMSG, roadmapId } = req.body

    const userId = req.user.id

    if (!userId) {
        throw new ApiError(401, " user is not authenticated to give review")
    }

    if (!reviewMSG || !roadmapId) {
        throw new ApiError(400, "required a message and select a roadmap")
    }

    const review = new Review(
        {
            reviewMSG,
            roadmapId,
            userId
        }
    )

    await review.save()

    res.status(201).json(
        new ApiResponse(
            201,
            review,
            "reviews is added successfully",
        )
    )

})

const getAllReviews = asyncHandler(async (req, res) => {
    const reviews = await Review.find().populate("userId", "fullName profilePicture email").populate("roadmapId", "title route")
    if (!reviews || reviews.length == 0) {
        throw new ApiError(404, "reviews are not found")
    }
    res.status(200).json(
        new ApiResponse(
            200,
            reviews,
            "All reviews are fetch successfully"
        )
    )
})

const getReviewsbyUser = asyncHandler(async (req, res) => {

    const userId = req.user.id
    if (!userId) {
        throw new ApiError(401, "user is not autenticated to find the reviews")
    }

    const review = await Review.find({ userId }).populate("userId", "fullName profilePicture email").populate("roadmapId", "title route");

    if (!review || review.length == 0) {
        throw new ApiError(404, "review is not found by user id")
    }
    res.status(200).json(
        new ApiResponse(
            200,
            review,
            "review found by user id"
        )
    )
})


const getReviewsbyRoadmapId = asyncHandler(async (req, res) => {
    const roadmapId = req.params.id
console.log("roadmap id",req.params.id);

    const reviews = await Review.find({ roadmapId }).populate("userId", "fullName email")

    if (!reviews || reviews.length == 0) {
        throw new ApiError(404, "No reviews are found in this roadmap id ")
    }

    res.status(200).json(
        new ApiResponse(
            200,
            reviews,
            "all reviews of this roadmap id fetched successfully"
        )
    )
})


export { addReviews, getReviewsbyUser,getAllReviews,getReviewsbyRoadmapId }