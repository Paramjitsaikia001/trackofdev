import {Review} from "../models/review.model.js"
import asyncHandler from "../utills/asyncHandler.js"
import Roadmaps from "../data/roadmaproutes.js"
import apiResponse from "../utills/apiResponse.js"
import apiError from "../utills/apiError.js"
const search = asyncHandler(async (req, res) => {
    const q = req.query.q.toLowerCase();

    const roadmapResult = Roadmaps.filter(r => {
        const matchTittle = r.title.toLowerCase().includes(q)
        const matchDesc = r.description.toLowerCase().includes(q)
        const matchSteps = r.roadmapSteps.some(step => {
            return (
                step.name.toLowerCase().includes(q) ||
                step.des.toLowerCase().includes(q)
            );
        })

        return matchDesc || matchTittle || matchSteps 
    })

    //when we fetching data from the database WE NEED TO USE AWAIT
    const Matchreviews = await Review.find({
        reviewMSG: { $regex :q, $options:"i" }
    })

    if (roadmapResult.length === 0 && Matchreviews.length === 0) {
        throw new apiError(404, "nothing is found");
    }

    res.status(200).json(
        new apiResponse(
            200,
            { roadmapResult, Matchreviews },
            "found somethings"
        )
    );
})

export default search