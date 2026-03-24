import { NextResponse } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*", "/giris", "/kayit"],
};

export function middleware(request: Request) {
  const url = new URL(request.url);
  const isOnDashboard = url.pathname.startsWith("/dashboard");
  const isOnGiris = url.pathname.startsWith("/giris");
  const isOnKayit = url.pathname.startsWith("/kayit");
  
  const cookies = request.headers.get("cookie") || "";
  const isLoggedIn = cookies.includes("demo-session");

  if (isOnDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL("/giris", url));
  }

  if ((isOnGiris || isOnKayit) && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", url));
  }

  return NextResponse.next();
}
