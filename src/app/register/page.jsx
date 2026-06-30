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
  const [isLoading, setIsLoading] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form.entries());

      const imageFile = formData.image
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
        toast.success("success");
        setIsSubmitted(true);
      }

      if (error) {
        toast.error(error.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10">
      <Card>
        <div>
          <h3 className="text-center font-semibold text-2xl text-accent">
            Register Account
          </h3>
        </div>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
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
            <Label>Profile Photo</Label>

            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="block w-full rounded-lg border p-2"
            />

            <FieldError />
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

          <div>
            <Button
              type="submit"
              isPending={isLoading}
              isDisabled={isLoading}
              className={"w-full rounded-2xl"}
            >
              {isLoading && <Spinner color="current" size="sm" />}

              {isLoading
                ? "Submitting..."
                : isSubmitted
                  ? "Submitted"
                  : "Submit"}
            </Button>
          </div>
        </Form>

        <div className='text-center font-mono text-lg'>
                      <p>Already have an account? <Link className=' border-b border-blue-300 hover:border-b-2' href={'/login'}>Login</Link></p>
                    </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
