import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function middleware(request: Request) {
  const url = new URL(request.url);
  const isOnDashboard = url.pathname.startsWith("/dashboard");
  const isOnGiris = url.pathname.startsWith("/giris");
  const isOnKayit = url.pathname.startsWith("/kayit");
  const cookieHeader = request.headers.get("cookie") || "";
  
  const sessionToken = cookieHeader
    .split(";")
    .find(c => c.trim().startsWith("next-auth.session-token="))
    ?.split("=")[1];

  const isLoggedIn = !!sessionToken;

  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/giris", url));
  }

  if ((isOnGiris || isOnKayit) && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/giris", "/kayit"],
};
