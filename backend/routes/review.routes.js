import { addReviews,getReviewsbyUser,getAllReviews,getReviewsbyRoadmapId } from "../controllers/review.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {Router} from 'express'

const router = Router()

router.get("/",getAllReviews)
router.post("/create-review",verifyJWT,addReviews)
router.get("/get-reviews-user",verifyJWT,getReviewsbyUser)
router.get("/get-reviews-roadmapid/:id",getReviewsbyRoadmapId)

export default router