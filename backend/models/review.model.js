import mongoose ,{Schema} from "mongoose";

const reviewSchema = new Schema(
    {
        reviewMSG: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
        roadmapId: {
            type: String,
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
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Review = mongoose.model("Review", reviewSchema)