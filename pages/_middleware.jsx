import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req) {
  if (
    req.url.includes("api") ||
    req.url.includes("assets") ||
    req.url.includes("favicon") ||
    req.url.includes("forgot")
  )
    return NextResponse.next();
  if (!req.page.name) return NextResponse.next();
  //
  const session = await getToken({
    req: req,
  });
  //
  if (req.nextUrl.pathname == "/login" || req.nextUrl.pathname == "/register") {
    if (session)
      return NextResponse.redirect(req.nextUrl.origin + "/dashboard");
    return NextResponse.next();
  }
  if (
    req.nextUrl.pathname == "/" ||
    req.nextUrl.pathname == "/layanan/daftar-layanan" ||
    req.nextUrl.pathname == "/faq" ||
    req.nextUrl.pathname == "/syarat-dan-ketentuan" ||
    req.nextUrl.pathname == "/kontak"
  ) {
    return NextResponse.next();
  }
  if (!session) return NextResponse.redirect(req.nextUrl.origin + "/login");
}

// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   async function middleware(req) {
//     // if (!req.page.name) return NextResponse.next();
//     // console.log(req.url);
//   },
//   {
//     callbacks: {
//       authorized: ({ req, token }) => {
//         if (!req.page.name) return true;
//         if (req.nextUrl.pathname.split("/")[1] == "api") return true;
//         if (
//           req.nextUrl.pathname == "/login" ||
//           req.nextUrl.pathname == "/register"
//         ) {
//           if (token)
//             return NextResponse.redirect(req.nextUrl.origin + "/dashboard");

//           return true;
//         }
//         if (req.nextUrl.pathname == "/") {
//           return true;
//         }
//         if (token) return true;
//         return false;
//       },
//     },
//   }
// );
