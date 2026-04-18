import { clerkMiddleware } from "@clerk/nextjs/server";
import type { NextProxy } from "next/server";

const clerk = clerkMiddleware() as NextProxy;

export default function proxy(
  ...args: Parameters<NextProxy>
): ReturnType<NextProxy> {
  return clerk(...args);
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
