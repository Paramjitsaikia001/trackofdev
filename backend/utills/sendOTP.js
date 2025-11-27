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


import nodemailer from "nodemailer";

export const Mailer = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is ${otp}`
    };

    await transporter.sendMail(mailOptions);
};