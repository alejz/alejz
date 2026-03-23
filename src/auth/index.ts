import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/giris",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          
          const user = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);

          if (user.length === 0) return null;
          
          const dbUser = user[0];
          
          if (!dbUser.isActive) return null;
          
          const passwordsMatch = await bcrypt.compare(password, dbUser.password);
          
          if (passwordsMatch) {
            await db
              .update(users)
              .set({ lastLoginAt: new Date() })
              .where(eq(users.id, dbUser.id));
            
            return {
              id: dbUser.id.toString(),
              name: `${dbUser.name} ${dbUser.surname}`,
              email: dbUser.email,
              level: dbUser.level,
              xp: dbUser.xp,
              token: dbUser.token,
            };
          }
        }
        
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.level = (user as any).level;
        token.xp = (user as any).xp;
        token.token = (user as any).token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).level = token.level;
        (session.user as any).xp = token.xp;
        (session.user as any).token = token.token;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});