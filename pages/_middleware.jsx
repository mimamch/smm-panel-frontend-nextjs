import { NextRequest, NextResponse } from "next/server";

export default function middleware(req) {
  if (!req.page.name) return NextResponse.next();
  if (req.nextUrl.pathname == "/login" || req.nextUrl.pathname == "/register") {
    if (req.cookies.jwt)
      return NextResponse.redirect(req.nextUrl.origin + "/dashboard");
    return NextResponse.next();
  }
  if (req.nextUrl.pathname == "/") {
    return NextResponse.next();
  }
  if (!req.cookies.jwt)
    return NextResponse.redirect(req.nextUrl.origin + "/login");
}
