import mongoose ,{Schema} from "mongoose";
const otpSchema = new Schema(
    {
        email:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            index:true,
        },
        otp:{
            type:String,
            required:true
        },
        expiredAt:{
            type:Date,
            required:true,
            index:{expires:300} //otp will expire in 5 minutes
        }
    }
)

export const OTP = mongoose.model('OTP',otpSchema);