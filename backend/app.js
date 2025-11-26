import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const app = express();  
dotenv.config();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
        credentials:true
        
    }
))



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser())


import router from './routes/roadmaproutes.js';
import authRouter from './routes/auth.routes.js';
import reviewRouter from "./routes/review.routes.js"
import activityRouter from "./routes/activity.routes.js"
import savedRoadmapRouter from "./routes/savedRoadmap.route.js"
import searchRouter from "./routes/search.routes.js"
import { healthCheckRouter } from './routes/healthCheck.routes.js';
import ProfileandCoverrouter from "./routes/profileAndcover.routes.js"

app.use("/api/v1/healthcheck",healthCheckRouter);

//auth routes
app.use("/api/v1/auth",authRouter);


app.use("/api/v1/reviews",reviewRouter)

app.use("/api/v1/activity",activityRouter)

app.use("/api/v1/saved-roadmap",savedRoadmapRouter)

app.use("/api/v1/search",searchRouter)

app.use("/api/v1/development",router);

app.use("/api/v1/profileAndCover",ProfileandCoverrouter)


export  {app};