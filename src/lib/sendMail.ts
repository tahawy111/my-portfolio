import nodemailer from "nodemailer";

const sendMail = async (mailData: object) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.NEXT_PUBLIC_SENDER_EMAIL}`,
      pass: `${process.env.NEXT_PUBLIC_SENDER_EMAIL_PASS}`,
    },
  });

  try {
    const res = await transport.sendMail(mailData);
    return res;
  } catch (error) {
    return error;
  }
};

export default sendMail;