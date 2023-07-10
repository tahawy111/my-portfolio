import sendMail from "@/lib/sendMail";
import { contactValidator } from "@/lib/validators/contactValidator";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, phone } = contactValidator.parse(body);

    const SENDER_MAIL = `${process.env.NEXT_PUBLIC_SENDER_EMAIL}`;
    const mailOptions = {
      from: email,
      to: `"Amer's Portfolio" <${SENDER_MAIL}>`,
      subject: "Recieved a message from your portfolio website",
      html: `
      <div>name: ${name}</div>
      <div>email: ${email}</div>
      <div>phone: ${phone}</div>
      <div>message: ${message}</div>
            `,
    };

    const emailRes = await sendMail(mailOptions);

    console.log(emailRes);

    return new Response("OK");
  } catch (error) {
    return new Response("Unable to send an email", { status: 400 });
  }
}
