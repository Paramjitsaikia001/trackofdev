import mongoose,{Schema} from "mongoose";

const activitySchema=new Schema(
    {
        userId:{
            type:Schema.Types.ObjectId,
            required:true
        },
          roadmapId:{
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
        },
        roadmpStepsId:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

export const Activity = mongoose.model("Activity", activitySchema)