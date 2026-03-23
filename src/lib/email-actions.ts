"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { generateSecureToken, hashToken } from "@/lib/security";
import { sendVerificationEmail, sendPasswordResetEmail, sendWelcomeEmail } from "@/lib/email";
import { eq } from "drizzle-orm";

const TOKEN_EXPIRY_HOURS = 24;
const RESET_TOKEN_EXPIRY_HOURS = 1;

export async function sendVerificationLink(email: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) {
    return { error: "Kullanıcı bulunamadı" };
  }

  if (user[0].emailVerified) {
    return { error: "Email zaten doğrulanmış" };
  }

  const token = generateSecureToken(32);
  const hashedToken = hashToken(token);

  await db
    .update(users)
    .set({ emailVerificationToken: hashedToken })
    .where(eq(users.id, user[0].id));

  await sendVerificationEmail(email, token);

  return { success: true, message: "Doğrulama emaili gönderildi" };
}

export async function verifyEmail(token: string) {
  const hashedToken = hashToken(token);

  const user = await db
    .select()
    .from(users)
    .where(eq(users.emailVerificationToken, hashedToken))
    .limit(1);

  if (user.length === 0) {
    return { error: "Geçersiz token" };
  }

  const dbUser = user[0];

  await db
    .update(users)
    .set({ 
      emailVerified: true,
      emailVerificationToken: null,
    })
    .where(eq(users.id, dbUser.id));

  return { success: true, message: "Email doğrulandı" };
}

export async function requestPasswordReset(email: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) {
    return { error: "Email bulunamadı" };
  }

  if (!user[0].isActive) {
    return { error: "Hesap aktif değil" };
  }

  const token = generateSecureToken(32);
  const hashedToken = hashToken(token);
  const expires = new Date(Date.now() + RESET_TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);

  await db
    .update(users)
    .set({ 
      passwordResetToken: hashedToken,
      passwordResetExpires: expires,
    })
    .where(eq(users.id, user[0].id));

  await sendPasswordResetEmail(email, token);

  return { success: true, message: "Şifre sıfırlama emaili gönderildi" };
}

export async function resetPassword(token: string, newPassword: string) {
  const hashedToken = hashToken(token);

  const user = await db
    .select()
    .from(users)
    .where(eq(users.passwordResetToken, hashedToken))
    .limit(1);

  if (user.length === 0) {
    return { error: "Geçersiz token" };
  }

  const dbUser = user[0];

  if (dbUser.passwordResetExpires && new Date(dbUser.passwordResetExpires) < new Date()) {
    return { error: "Token süresi dolmuş" };
  }

  const bcrypt = require("bcryptjs");
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await db
    .update(users)
    .set({ 
      password: hashedPassword,
      passwordResetToken: null,
      passwordResetExpires: null,
    })
    .where(eq(users.id, dbUser.id));

  return { success: true, message: "Şifre başarıyla değiştirildi" };
}

export async function resendWelcomeEmail(userId: number) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (user.length === 0) {
    return { error: "Kullanıcı bulunamadı" };
  }

  await sendWelcomeEmail(user[0].email, user[0].name);

  return { success: true, message: "Welcome email gönderildi" };
}