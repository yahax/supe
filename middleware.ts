import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const securityHeaders: Record<string, string> = {
  "Content-Security-Policy": "default-src 'self'; img-src 'self' blob: data:; script-src 'self'; style-src 'self' 'unsafe-inline'; connect-src 'self'; font-src 'self'; frame-ancestors 'none';", // Adjust carefully when adding fonts or third-party scripts.
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

export default auth(async (req) => {
  const { nextUrl } = req;
  const response = NextResponse.next();
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  if (nextUrl.pathname.startsWith("/dashboard")) {
    const user = req.auth?.user as { role?: string } | undefined;
    if (!user) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
    if (!["admin", "client"].includes(user.role ?? "")) {
      return NextResponse.redirect(new URL("/login", nextUrl));
    }
  }

  return response;
});

export const config = {
  matcher: ["/(.*)"],
};
