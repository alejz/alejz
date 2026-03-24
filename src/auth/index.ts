import { cookies } from "next/headers";

const DEMO_USER = { id: "1", name: "Demo User", email: "demo@demo.com", password: "demo123" };

export async function auth() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("demo-session");
  
  if (sessionCookie?.value) {
    return { user: DEMO_USER };
  }
  return null;
}

export async function signIn(email: string, password: string) {
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    return { success: true, user: DEMO_USER };
  }
  return { success: false, error: "E-posta veya şifre hatalı" };
}

export function signOut() {
  return { success: true };
}

export const handlers = { GET: () => Response.json({}), POST: () => Response.json({}) };
