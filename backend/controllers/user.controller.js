
import { OTP } from "../models/otp.model.js";
import { User } from "../models/user.model.js";
import { EmailVerification } from "../models/verifiedemail.model.js";
// import { SavedRoadmap } from "../models/savedRoadmap.model.js";
// import { Activity } from "../models/activity.model.js";
// import { Reviews } from "../models/reviews.model.js";
import  Mailer  from "../utills/sendOTP.js";
import ApiError from "../utills/apiError.js";
import asyncHandler from "../utills/asyncHandler.js";
import apiResponse from "../utills/apiResponse.js";
import generateOTP from "../utills/generateOTP.js";
import ApiResponse from "../utills/apiResponse.js";




//generating access token and refresh token for a user
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId)
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({
      validateBeforeSave: false
    })

    return { accessToken, refreshToken }
  } catch (err) {
    throw new ApiError(500, "Something wrong in generating the acess token and refresh token")
  }
}


// const sendOTP = asyncHandler(async (req, res) => {

//   //get the email from req.body
//   //check if the email is empty
//   //check if the email is valid format
//   //check if the email already exists in the database
//   const { email } = req.body;

//   if (!email) {
//     throw new ApiError(400, "Email is required");
//   }
//   if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//     throw new ApiError(400, "Invalid email format");
//   }
//   const exitEmail = await User.findOne({ email: email.toLowerCase().trim() });
//   if (exitEmail && exitEmail.isEmailVerified) {
//     throw new ApiError(400, "email is already exists . please login instead")
//   }

// console.log("checking in controller.....");


//   const otp = generateOTP();
//   console.log(otp, email);

//   await OTP.findOneAndUpdate(
//     { email: email.toLowerCase().trim() },
//     {
//       otp: otp,
//       expiredAt: new Date(Date.now() + 5 * 60 * 1000) //otp will expire in 5 minutes
//     },
//     {
//       upsert: true,
//       new: true
//     }
//   );
//   try {
//     await Mailer(email, otp);
//     console.log("OTP sent");
//   } catch (error) {
//     throw new ApiError(500, "Failed to send OTP email", error.message);
//   }

//   return res.status(201).json(
//     new apiResponse(201, "OTP sent to your email successfully")
//   );
// })

// const verifyOTP = asyncHandler(async (req, res) => {

//   const { email, otp } = req.body;

//   if (!email || !otp) {
//     throw new ApiError(400, "Email and OTP are required");
//   }

//   const normalizedEmail = email.toLowerCase().trim();

//   const record = await OTP.findOne({ email: normalizedEmail });
//   if (!record) {
//     throw new ApiError(400, "OTP expired or not found");
//   }

//   if (record.otp !== otp) {
//     throw new ApiError(400, "Invalid OTP");
//   }
//   console.log("otp verification is ........");

//   await EmailVerification.findOneAndUpdate(
//     { email: normalizedEmail },
//     { verified: true },
//     { upsert: true }
//   );
//   await OTP.deleteOne({ email: normalizedEmail });


//   return res.status(200).json(
//     new apiResponse(200, { success: true }, "OTP verified successfully. Proceed to registration.")
//   );
// });

const register = asyncHandler(async (req, res) => {
  const { email, fullName, userName, password, confirmPassword,Role } = req.body;

  if ([email, fullName, userName, password, confirmPassword,Role].some(f => !f)) {
    throw new ApiError(400, "All fields are required");
  }

  const normalizedEmail = email.toLowerCase().trim();

  // const emailVerified = await EmailVerification.findOne({ email: normalizedEmail });

  // if (!emailVerified || !emailVerified.verified) {
  //   throw new ApiError(400, "Email not verified. Please verify OTP first.");
  // }

  const userNameRegex = /^[a-z_][a-z0-9_]*$/;
  if (!userNameRegex.test(userName)) {
    throw new ApiError(400, "Invalid userName format. userName should start with a letter or underscore and contain only letters, numbers, and underscores.");
  }

  const existingUserName = await User.findOne({ userName: userName.trim() });
  if (existingUserName) {
    throw new ApiError(400, "Username already taken");
  }

  if (password.length < 8) {
    throw new ApiError(400, "Password must be at least 8 characters long");
  }

  if (password !== confirmPassword) {
    throw new ApiError(400, "Password and Confirm Password do not match.");
  }

  const newUser = await User.create({
    email: normalizedEmail,
    fullName,
    userName,
    password,
    Role,
    isEmailVerified: true
  });


  // await EmailVerification.deleteOne({ email: normalizedEmail });

  // generate tokens for auto-login after registration
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(newUser._id);

  // remove password + refreshToken
  const safeUser = await User.findById(newUser._id).select("-password -refreshToken");

  // cookie options
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  };

  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {
          user: safeUser,
          accessToken,
          refreshToken
        },
        "User registered & logged in successfully"
      )
    );
});

const login = asyncHandler(async (req, res) => {

  const { email, userName, password } = req.body

  if (!(email || userName)) {
    throw new ApiError(400, "username or email is required")
  }

  const user = await User.findOne({
    $or: [{ email }, { userName }]
  })

  if (!user) {
    throw new ApiError(404, "user not exists")
  }


  const passwordValid = await user.isPasswordCorrect(password)

  if (!passwordValid) {
    throw new ApiError(401, "invalid user credential")
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)


  const logginUser = await User.findById(user._id).select("-password -refreshToken")

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  }

  // return res.status(200).cookie("refreshToken",refreshToken,options).cookie("accessToken",accessToken,options).json(
  //   new ApiResponse(
  //     200,
  //     {
  //       user:refreshToken,accessToken,logginUser
  //     },
  //     "User log in successful"
  //   )
  // )

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: logginUser,     // send the sanitized user
          accessToken,          // plain string token
          refreshToken          // plain string token
        },
        "User login successful"
      )
    );

})


const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1
      },
    },
    {
      new: true
    }
  )

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  }

  res.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options).json(
    new apiResponse(
      200,
      {},
      "usr logged out successfully"
    )
  )
})


const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(
      200,
      req.user,
      "User fetched successfully"
    ))
})

const updateUserdetails = asyncHandler(async (req, res) => {
  const { fullName, bio, github, portfolio, Linkedin, profilePicture,Role,coverPicture } = req.body

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        fullName: fullName,
        bio: bio,
        github: github,
        portfolio: portfolio,
        Linkedin: Linkedin,
        profilePicture: profilePicture,
        coverPicture: coverPicture,
        Role:Role
      }
    },
    {
      new: true
    }
  ).select("-password")

  res.status(200).json(
    new ApiResponse(
      200,
      user,
      "user details updated successfully"

    )
  )

})


export { register, login, getCurrentUser, logoutUser ,updateUserdetails};