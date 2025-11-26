import { ProfilePics, CoverImages } from "../data/profileImages.js"

import { Router } from "express"

const router = Router()

router.get("/profile-pics", (req, res) => {
    res.json(ProfilePics)
})
router.get("/cover-pics", (req, res) => {
    res.json(CoverImages)
})

router.get("/profile-pics/:id", (req, res) => {
    const id = parseInt(req.params.id) // so my id is in int and req.params.id return a string so i need to write this
    const profilepic = ProfilePics.find(r => r.id === id)
    
    
    if (!profilepic) return res.status(404).json({ message: "profilepic is not found" })
     res.json(profilepic)
})

router.get("/cover-pics/:id", (req, res) => {
    const id = parseInt(req.params.id) // so my id is in int and req.params.id return a string so i need to write this
    const coverimage = CoverImages.find(r => r.id === id)
   
    
    if (!coverimage) return res.status(404).json({ message: "cover image is not found" })
     res.json(coverimage)
})

export default router