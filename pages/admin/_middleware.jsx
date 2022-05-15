import jwtDecode from "jwt-decode";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function Middleware(req) {
  const session = await getToken({
    req: req,
  });
  const user = jwtDecode(session.token);
  if (user.role == "admin") return NextResponse.next();
  return NextResponse.redirect(req.nextUrl.origin + "/dashboard");
}
