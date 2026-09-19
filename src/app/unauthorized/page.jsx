"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiShieldX } from "react-icons/bi";

export default function UnauthorizedPage() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-danger-soft p-5">
            <BiShieldX
              className="h-16 w-16 text-danger-soft-foreground"
              aria-hidden="true"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-danger">403</h1>

        <h2 className="mt-4 text-2xl font-semibold">Access Denied</h2>

        <p className="mt-3 text-muted">
          Sorry, you don&apos;t have permission to access this page. Please
          contact the administrator if you believe this is a mistake.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="primary-link px-6">
            Go Home
          </Link>

          <button type="button" onClick={handleBack} className="secondary-link px-6">
            Go Back
          </button>
        </div>

        <p className="mt-6 text-sm text-muted">
          Need to sign in?{" "}
          <Link href="/login" className="font-medium text-accent hover:underline">
            Go to login
          </Link>
        </p>
      </div>
    </div>
  );
}
