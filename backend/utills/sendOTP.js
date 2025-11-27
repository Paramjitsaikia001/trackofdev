// //set a utillity to send otp to use email usine nodemailer
// import ApiError from './apiError.js';
// import nodemailer from 'nodemailer';

// // const transporter = nodemailer.createTransport(
// //     {
// //         service: process.env.EMAIL_SERVICE,
// //         auth: {
// //             user: process.env.EMAIL_USER,
// //             pass: process.env.EMAIL_PASSWORD
// //         }
// //     }
// // );

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//     },
// });

// transporter.verify((err, success) => {
//   console.log("VERIFY ERR:", err);
//   console.log("VERIFY SUCCESS:", success);
// });

// const Mailer = async ( email,otp) => {
//     try {
//         if (!process.env.EMAIL_USER && !process.env.EMAIL_PASSWORD) {
//             console.log("Email credentials are not set in environment variables");
//             console.log(`your otp is ${otp} for email ${email}`);

//             return true;
//         }

//         await transporter.sendMail(
//             {
//                 from: process.env.EMAIL_USER,
//                 to: email,
//                 subject: "Your verification OTP From DevTrack",
//                 text: `Your Verification OTP is ${otp}. It is valid for 5 minutes.`
//             }
//         )
//         return true;
//     } catch (err) {
//         console.log(transporter);
//         throw new ApiError(500, "Failed to send OTP email", err.message);
//     }
// }

// export { Mailer };


// backend/utills/sendOTP.js
import nodemailer from "nodemailer";

export const Mailer = async (toEmail, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,                // smtp-relay.brevo.com
      port: Number(process.env.EMAIL_PORT || 587), // 587
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,             // Brevo SMTP key
      },
      // optional: increase connection timeout to avoid ETIMEDOUT
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
    });

    // verify connection (logs will show any auth/connection errors)
    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: "Your DevTrack OTP",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
      html: `<p>Your OTP is <strong>${otp}</strong>. It expires in 5 minutes.</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Mailer sent:", info.messageId);
    return info;
  } catch (err) {
    // throw a clear error so controller can surface it
    console.error("Mailer error:", err && err.message ? err.message : err);
    throw new Error(err && err.message ? err.message : "Mailer failed");
  }
};

export default Mailer;