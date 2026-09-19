"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Spinner,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    const { email, password } = formData;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Unable to sign in. Please try again.");
      setIsLoading(false);
      return;
    }

    if (data) {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Login success");
      window.location.href = "/";
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <Card className="w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold text-accent">
          Login Account
        </h1>
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            isPending={isLoading}
            isDisabled={isLoading}
            className="w-full"
          >
            {isLoading && <Spinner color="current" size="sm" />}

            {isLoading ? "Logging in…" : isSubmitted ? "Logged In" : "Log In"}
          </Button>
        </Form>

        <Button
          onClick={handleGoogleLogin}
          className="w-full"
          variant="secondary"
        >
          <BsGoogle />
          Sign in with Google
        </Button>

        <p className="text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            href="/register"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
