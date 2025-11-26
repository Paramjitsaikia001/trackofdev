import { saveRoadmap,getSavedRoadmapsOfUser,deleteSavedRoadmap } from "../controllers/saveRoadmap.controller.js";

import { verifyJWT } from "../middleware/auth.middleware.js";

import {Router} from 'express'

const router = Router()

router.post("/",verifyJWT,saveRoadmap)
router.post("/delete-savedRoadmap",verifyJWT,deleteSavedRoadmap)
router.get("/get-savedRoadmap-user",verifyJWT,getSavedRoadmapsOfUser)

export default router