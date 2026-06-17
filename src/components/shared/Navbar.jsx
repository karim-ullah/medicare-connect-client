"use client";
import { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDashOpen, setIsDashOpen] = useState(false)

  const handleDashboard = ()=>{
    alert('working')
  }

  const navLinks = (
    <>
      <li>
        <Link href="/" className="block py-2  font-normal text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href="/find-doctors" className="block py-2  font-normal text-primary">
          Find Doctors
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="block py-2  font-normal text-primary">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className="block py-2  font-normal text-primary">
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="relative">
    <nav className=" sticky top-0 z-40 border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <h3 className="font-bold"><span className="text-[#0369A1] text-2xl">MediCare</span><span className="text-primary">Connect</span></h3>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{navLinks}</ul>

        {isLoggedIn ? (
            <div onClick={handleDashboard} className="cursor-pointer">

          <Avatar size="sm" >
            <Avatar.Image
              alt="John Doe"
              src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
            </div>
        ) : (
          <div className="space-x-2">
            <Button className={'bg-background text-foreground border'}>Login</Button>
            <Button>Register</Button>
          </div>
        )}
      </header>

      
      
    </nav>

    {isMenuOpen && (
        <div className="absolute top-18 left-4 w-64 bg-indigo-500/5 backdrop-blur-md border rounded-2xl  z-100 md:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLinks}</ul>
        </div>
      )}


    </div>

    
  );
};

export default Navbar;
