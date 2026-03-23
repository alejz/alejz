import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || '"CareerQuest" <noreply@careerquest.com>',
      to,
      subject,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Email gönderilemedi" };
  }
}

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/dogrula?token=${token}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background: #0a0a0f; color: white; padding: 40px; }
        .container { max-width: 500px; margin: 0 auto; background: #1a1a1f; border-radius: 16px; padding: 32px; }
        .logo { text-align: center; margin-bottom: 24px; font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #22d3ee, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .title { font-size: 20px; text-align: center; margin-bottom: 16px; }
        .text { color: #a1a1aa; text-align: center; margin-bottom: 24px; line-height: 1.6; }
        .button { display: inline-block; background: #22d3ee; color: #0a0a0f; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; }
        .footer { text-align: center; color: #71717a; font-size: 12px; margin-top: 24px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">CareerQuest</div>
        <div class="title">Email Adresini Doğrula</div>
        <div class="text">
          CareerQuest'e hoş geldin! Hesabını aktifleştirmek için aşağıdaki butona tıkla.
        </div>
        <div style="text-align: center;">
          <a href="${verificationUrl}" class="button">Emailimi Doğrula</a>
        </div>
        <div class="footer">
          Bu link 24 saat içinde expire olur.<br>
          Herhangi bir sorun olursa support@careerquest.com
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: email,
    subject: "CareerQuest - Emailini Doğrula",
    html,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/sifre-sifirla?token=${token}`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background: #0a0a0f; color: white; padding: 40px; }
        .container { max-width: 500px; margin: 0 auto; background: #1a1a1f; border-radius: 16px; padding: 32px; }
        .logo { text-align: center; margin-bottom: 24px; font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #22d3ee, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .title { font-size: 20px; text-align: center; margin-bottom: 16px; }
        .text { color: #a1a1aa; text-align: center; margin-bottom: 24px; line-height: 1.6; }
        .button { display: inline-block; background: #ef4444; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; }
        .footer { text-align: center; color: #71717a; font-size: 12px; margin-top: 24px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">CareerQuest</div>
        <div class="title">Şifreni Sıfırla</div>
        <div class="text">
          Şifreni sıfırlamak için aşağıdaki linke tıkla. Eğer sen değilsen, bu emaili görmezden gel.
        </div>
        <div style="text-align: center;">
          <a href="${resetUrl}" class="button">Şifremi Sıfırla</a>
        </div>
        <div class="footer">
          Bu link 1 saat içinde expire olur.<br>
          Güvenlik nedeniyle başka bir yere paylaşma
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: email,
    subject: "CareerQuest - Şifre Sıfırlama",
    html,
  });
}

export async function sendWelcomeEmail(email: string, name: string) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; background: #0a0a0f; color: white; padding: 40px; }
        .container { max-width: 500px; margin: 0 auto; background: #1a1a1f; border-radius: 16px; padding: 32px; }
        .logo { text-align: center; margin-bottom: 24px; font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #22d3ee, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .title { font-size: 20px; text-align: center; margin-bottom: 16px; }
        .text { color: #a1a1aa; text-align: center; margin-bottom: 24px; line-height: 1.6; }
        .feature { background: #27272a; padding: 16px; border-radius: 8px; margin-bottom: 12px; text-align: center; }
        .feature-icon { font-size: 24px; margin-bottom: 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">CareerQuest</div>
        <div class="title">Hoş Geldin, ${name}!</div>
        <div class="text">
          Kariyer yolculuğuna başladın. Şimdi yapabileceklerini keşfet:
        </div>
        <div class="feature">
          <div class="feature-icon">🎯</div>
          <div>Kariyer hedeflerini belirle</div>
        </div>
        <div class="feature">
          <div class="feature-icon">📈</div>
          <div>Becerilerini geliştir</div>
        </div>
        <div class="feature">
          <div class="feature-icon">🏆</div>
          <div>Görevleri tamamlayarak ilerle</div>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: email,
    subject: "CareerQuest'e Hoş Geldin!",
    html,
  });
}