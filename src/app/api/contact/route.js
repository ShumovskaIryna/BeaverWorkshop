import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Транспорт для SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Наприклад smtp.gmail.com
      port: process.env.SMTP_PORT, // 465 або 587
      secure: process.env.SMTP_PORT == 465, // true для 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Відправка листа
    await transporter.sendMail({
      from: `"Сайт" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL, // Куди відправляти
      subject: "Нове повідомлення з сайту",
      text: `
        Ім'я: ${name}
        Email: ${email}
        Повідомлення: ${message}
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
