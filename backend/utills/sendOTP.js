// backend/utills/sendOTP.js
import nodemailer from "nodemailer";

export const Mailer = async (toEmail, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host:  "serversmtp-relay.brevo.com"
,          // smtp-relay.brevo.com
      port: Number(process.env.EMAIL_PORT) || 587,  // 587
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "paramjitsaikia@gmail.com",        // same email verified on Brevo
        pass: process.env.EMAIL_PASS ||"Hpk1f3hSd75YtEBN",        // Brevo SMTP key
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
    });

    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: "Your DevTrack OTP",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
      html: `<p>Your OTP is <strong>${otp}</strong>. It expires in 5 minutes.</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Mailer sent:", info.messageId);

    return info;
  } catch (err) {
    console.error("Mailer error:", err);
    throw new Error("Failed to send OTP email");
  }
};

export default Mailer;