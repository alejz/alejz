import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  { id: "1", name: "Demo User", email: "demo@demo.com", password: "demo123" }
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Demo",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = users.find(u => u.email === credentials?.email && u.password === credentials?.password);
        if (user) return { id: user.id, name: user.name, email: user.email };
        return null;
      }
    })
  ],
  pages: {
    signIn: "/giris",
  },
  session: {
    strategy: "jwt",
  },
  secret: "demo-secret-key-change-in-production"
});
