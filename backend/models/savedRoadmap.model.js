import mongoose, { Schema } from "mongoose";

const savedRoadmapSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required:true
        },
        roadmapRoute:{
            type:String,
            enum: {
                values: [
                    "AIML",
                    "webdev",
                    "frontend-web-dev",
                    "backend",
                    "appdev",
                    "gamedev",
                    "cybersecurity",
                    "blockchain",
                    "devopscloud",
                    "datascience",
                    "iot",
                    "bigdata"
                ],
                message: "Value is not a valid roadmapId"
            },
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const SavedRoadmap=mongoose.model("SavedRoadmap",savedRoadmapSchema)