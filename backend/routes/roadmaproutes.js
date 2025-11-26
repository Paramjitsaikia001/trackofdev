import express from 'express';
const router = express.Router();
import roadmaps from "../data/roadmaproutes.js"


router.get("/", (req, res) => {
    res.json(roadmaps)
})


router.get("/:route", (req, res) => {
    const roadmap = roadmaps.find(r => r.route === req.params.route)
    if (!roadmap) return res.status(404).json({ message: 'roadmap is not find' })
    res.json(roadmap)
})

router.post("/route-details", (req, res) => {
    const roadmaproute=req.body

    
     const roadmap = roadmaps.find(r => r.route === roadmaproute.roadmaproute)
    if (!roadmap) return res.status(404).json({ message: 'roadmap is not find' })
    res.json(roadmap)
})


export default router