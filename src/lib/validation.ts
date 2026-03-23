import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter").max(50),
  surname: z.string().min(2, "Soyad en az 2 karakter").max(50),
  email: z.string().email("Geçerli bir email girin"),
  password: z
    .string()
    .min(8, "Şifre en az 8 karakter")
    .regex(/[A-Z]/, "En az 1 büyük harf gerekli")
    .regex(/[a-z]/, "En az 1 küçük harf gerekli")
    .regex(/[0-9]/, "En az 1 rakam gerekli"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().email("Geçerli bir email girin"),
  password: z.string().min(1, "Şifre gerekli"),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Mevcut şifre gerekli"),
  newPassword: z
    .string()
    .min(8, "Şifre en az 8 karakter")
    .regex(/[A-Z]/, "En az 1 büyük harf gerekli")
    .regex(/[a-z]/, "En az 1 küçük harf gerekli")
    .regex(/[0-9]/, "En az 1 rakam gerekli"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;