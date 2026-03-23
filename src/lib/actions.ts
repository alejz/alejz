"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { registerSchema } from "@/lib/validation";
import { checkRateLimit } from "@/lib/security";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { z } from "zod";

export async function registerUser(formData: FormData) {
  const rateLimitKey = `register:${formData.get("email")}`;
  
  if (!checkRateLimit(rateLimitKey, 3, 60000)) {
    return { error: "Çok fazla deneme. 1 dakika sonra tekrar dene." };
  }

  const data = {
    name: formData.get("name") as string,
    surname: formData.get("surname") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  const result = registerSchema.safeParse(data);

  if (!result.success) {
    return { error: result.error.issues[0].message };
  }

  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, data.email))
      .limit(1);

    if (existingUser.length > 0) {
      return { error: "Bu email zaten kayıtlı" };
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const newUser = await db
      .insert(users)
      .values({
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: hashedPassword,
        level: 1,
        xp: 0,
        token: 100,
        emailVerified: false,
        isActive: true,
      })
      .returning({ id: users.id });

    return { success: true, userId: newUser[0].id };
  } catch (error) {
    console.error("Register error:", error);
    return { error: "Bir hata oluştu. Lütfen tekrar dene." };
  }
}