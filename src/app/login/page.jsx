'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Spinner, TextField } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const LoginPage = () => {

    

    const [isLoading, setIsLoading] = useState(null)
      const [isSubmitted, setIsSubmitted] = useState(false);
    

    const onSubmit = async(e)=>{
        e.preventDefault()
        setIsLoading(true)

        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())
        const {email,password} = formData

        const {data, error} = await authClient.signIn.email({
            email,
            password,
        
        })

        if(data){
            setIsLoading(false)
            setIsSubmitted(true)
            toast.success('Login success')
            window.location.href = '/'

        }

    }
    return (
        <div>
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
            
                      <div>
                        <Button
                          type="submit"
                          isPending={isLoading}
                          isDisabled={isLoading}
                          className={"w-full rounded-2xl"}
                        >
                          {isLoading && <Spinner color="current" size="sm" />}
            
                          {isLoading
                            ? "Loging..."
                            : isSubmitted
                              ? "Logged In"
                              : "Log In"}
                        </Button>
                      </div>
                    </Form>
                  </Card>
                </div>
        </div>
    );
};

export default LoginPage;