import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isPublicRoute = createRouteMatcher([
  "/",
  "/properties(.*)",
  "/about(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;

  if (!isPublicRoute(req)) await auth.protect();
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};