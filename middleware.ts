import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("sb-access-token");

  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/register");

  const isProtected =
    req.nextUrl.pathname.startsWith("/admin") ||
    req.nextUrl.pathname.startsWith("/jobs/create");

  // user logged in bo‘lsa login/registerga kirmaydi
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // login qilmagan user protected pagega kira olmaydi
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/admin/:path*",
    "/jobs/create",
  ],
};