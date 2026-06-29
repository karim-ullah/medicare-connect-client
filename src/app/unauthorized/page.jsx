"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { BiShieldX } from "react-icons/bi";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 dark:bg-black">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-danger/10 p-5">
            <BiShieldX className="h-16 w-16 text-danger" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-danger">403</h1>

        <h2 className="mt-4 text-2xl font-semibold">Access Denied</h2>

        <p className="mt-3 text-default-500">
          Sorry, you don't have permission to access this page. Please contact
          the administrator if you believe this is a mistake.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button color="primary" radius="full">
            <Link href={'/'}> Go Home</Link>
          </Button>

          <Button
            variant="bordered"
            radius="full"
            onPress={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
