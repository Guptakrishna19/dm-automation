"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

export function SiteHeader() {
  const { isLoaded, userId } = useAuth();

  return (
    <header className="flex h-16 items-center justify-end gap-4 p-4">
      {!isLoaded ? (
        <div className="h-9 w-24 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
      ) : userId ? (
        <UserButton />
      ) : (
        <>
          <SignInButton mode="redirect">
            <button
              type="button"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              Sign in
            </button>
          </SignInButton>
          <SignUpButton mode="redirect">
            <button
              type="button"
              className="rounded-full bg-[#6c47ff] px-4 py-2 text-sm font-medium text-white hover:bg-[#5a3ad6]"
            >
              Sign up
            </button>
          </SignUpButton>
        </>
      )}
    </header>
  );
}
