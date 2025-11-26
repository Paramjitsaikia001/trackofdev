import mongoose from "mongoose";

const emailVerificationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, expires: 300 } // auto-delete in 5 min
});

export const EmailVerification = mongoose.model("EmailVerification", emailVerificationSchema);