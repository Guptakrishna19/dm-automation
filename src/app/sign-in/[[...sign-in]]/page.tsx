"use client";

import { SignIn, SignOutButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <p className="text-sm text-zinc-500">Loading…</p>
      </main>
    );
  }

  if (userId) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-4 py-8">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
          You&apos;re already signed in. Clerk hides the sign-in form when a session exists.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="text-sm font-medium text-violet-700 underline-offset-4 hover:underline dark:text-violet-400"
          >
            Continue to home
          </Link>
          <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
            <button
              type="button"
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              Sign out
            </button>
          </SignOutButton>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 px-4 py-8">
      <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Sign in
      </h1>
      <SignIn routing="path" path="/sign-in" />
    </main>
  );
}
