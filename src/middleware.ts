import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

// This function can be marked `async` if using `await` inside
export default withAuth(function middleware(req) {
    // const url = req.nextUrl.clone()
    // url.pathname = '/'
    // if (!req.nextauth.token?.username) return NextResponse.rewrite(url)

  return NextResponse.next();
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
};
