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
  TextField,
  Select,
  ListBox,
  Spinner,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form.entries());

      const imageFile = formData.image;

      if (!(imageFile instanceof File) || imageFile.size === 0) {
        toast.error("Please choose a profile photo");
        return;
      }

      const imageData = new FormData();
      imageData.append("image", imageFile);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: imageData,
        },
      );

      const imgbbData = await imgbbRes.json();
      const imageUrl = imgbbData?.data?.url;

      if (!imageUrl) {
        toast.error("Image upload failed. Please try again.");
        return;
      }

      const { name, email, role, password } = formData;

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        role,
        image: imageUrl,
        callbackURL: "/",
      });

      if (data) {
        toast.success("Account created successfully");
        setIsSubmitted(true);
      }

      if (error) {
        toast.error(error.message);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <Card className="w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold text-accent">
          Register Account
        </h1>
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
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

          {/* Select Role */}

          <Select
            className="w-full"
            placeholder="Select one"
            isRequired
            name="role"
          >
            <Label>Role</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="doctor" textValue="doctor">
                  Doctor
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="patient" textValue="patient">
                  Patient
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* file upload */}

          <div className="space-y-2">
            <Label htmlFor="image" isRequired>
              Profile Photo
            </Label>

            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              required
              className="block w-full rounded-xl border border-border bg-surface p-2 text-sm text-slate-700 file:mr-3 file:rounded-lg file:border-0 file:bg-accent-soft file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-accent hover:file:bg-accent/20"
            />

            <p className="text-xs text-muted">
              Upload a clear photo in JPG or PNG format.
            </p>
          </div>

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
            isDisabled={isLoading || isSubmitted}
            className="w-full"
          >
            {isLoading && <Spinner color="current" size="sm" />}

            {isLoading
              ? "Submitting..."
              : isSubmitted
                ? "Submitted"
                : "Submit"}
          </Button>
        </Form>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            className="font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            href="/login"
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
