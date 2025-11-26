import Search from "../controllers/search.controller.js"

import {Router} from "express"

const router = Router()

router.get("/",Search)

export default router