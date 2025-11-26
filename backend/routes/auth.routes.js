import { get } from "mongoose";
import { sendOTP,verifyOTP,register ,login,getCurrentUser,logoutUser,updateUserdetails} from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import {Router} from "express";

const authRouter =Router();

authRouter.post("/send-otp",sendOTP);
authRouter.post("/verify-otp",verifyOTP);
authRouter.post("/register",register);
authRouter.post("/login",login)
authRouter.post("/logout",verifyJWT,logoutUser)
authRouter.get("/current-user",verifyJWT,getCurrentUser)
authRouter.put("/update-details",verifyJWT,updateUserdetails)

export default authRouter;