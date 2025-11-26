import { createActivity,getUserActivity,deleteActivity } from "../controllers/activity.controller.js";

import {verifyJWT} from "../middleware/auth.middleware.js"
import { Router } from "express";

const router = Router()

router.post("/create-activity",verifyJWT,createActivity)
router.get("/get-user-activity",verifyJWT,getUserActivity)
router.post("/delete-activity",verifyJWT,deleteActivity)

export default router

