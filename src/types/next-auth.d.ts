import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      level: number
      xp: number
      token: number
    }
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    level?: number
    xp?: number
    token?: number
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    level?: number
    xp?: number
    token?: number
  }
}