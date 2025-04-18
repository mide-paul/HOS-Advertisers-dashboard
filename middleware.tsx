import { NextResponse } from "next/server";

export function middleware(request: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: any; clone: () => any; }; }) {
  // Get token from cookies
  const token = request.cookies.get("token");
  
  // Get token from local storage (or any other method you're using for authentication)
  // const token = localStorage.getItem("token"); // Retrieve token from localStorage

  // Define paths that require authentication
  const protectedPaths = ["/sponsors", "/ad-history", "/ad-plan", "/agreement", "/bank-details",
     "/blog-post", "/live-chat", "/my-ads", "/payment", "/payment-success", "/plans", "/security-and-privacy",
     "/see-more", "/support", "/settings"];
  const pathname = request.nextUrl.pathname;

  // Redirect unauthenticated users
  if (protectedPaths.includes(pathname) && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Allow request if authenticated or not a protected path
  return NextResponse.next();
}

export const config = {
  matcher: ["/sponsors/:path*", "/ad-history/:path*", "/ad-plan/:path*", "/agreement/:path*", "/bank-details/:path*",
    "/blog-post/:path*", "/live-chat/:path*", "/my-ads/:path*", "/payment/:path*", "/payment-success/:path*",
    "/plans/:path*", "/security-and-privacy/:path*", "/see-more/:path*", "/support/:path*", "/settings/:path*"], // Define protected routes
};