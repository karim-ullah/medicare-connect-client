"use client";
import { useEffect, useState } from "react";
import { Button, Avatar } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FiUser } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import toast from "react-hot-toast";

const Navbar = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);
  const role = user?.role
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDashOpen, setIsDashOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }

    const handleClickOutside = () => {
      setIsDashOpen(false);
    };

    if (isDashOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [user, isDashOpen]);

  const handleDashboard = () => {
    setIsDashOpen(!isDashOpen);
  };

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Logout successfully");
    window.location.href = '/'
  };

  const navLinks = (
    <>
      <li>
        <Link href="/" className="block py-2  font-mono text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/find-doctors"
          className="block py-2  font-mono text-primary"
        >
          Find Doctors
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="block py-2  font-mono text-primary">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className="block py-2  font-mono text-primary">
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    
      <nav className="sticky top-0 z-40 border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="relative container flex h-14 items-center justify-between gap-2">
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
              <h3 className="font-bold">
                <span className="text-[#0369A1] text-xl">MediCare</span>
                <span className="text-xs md:text-sm text-foreground font-light md:font-medium">Connect</span>
              </h3>
            </div>
          </div>

          <div>
            <ul className="hidden md:flex items-center gap-4">{navLinks}</ul>
          </div>

          {isLoggedIn ? (
            <div
              onClick={handleDashboard}
              className="cursor-pointer flex items-center gap-1.5 border border-accent px-3 py-1 rounded-xl hover:border"
            >
              <Avatar size="sm">
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>
                  {user?.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium capitalize">{user?.name}</span>
                <span className="text-sm font-mono text-primary -mt-1">
                  {user?.role}
                </span>
              </div>
            </div>
          ) : (
            <div className="space-x-2">
              <Button className={"bg-background text-foreground border"}>
                <Link href={'/login'}>Login</Link>
              </Button>
              <Button>
                <Link href={"/register"}>Register</Link>
              </Button>
            </div>
          )}



          {isMenuOpen && (
        <div className="absolute left-4 top-16 z-50 w-64 overflow-hidden rounded-2xl border border-default-200 bg-background shadow-xl md:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLinks}</ul>
        </div>
      )}

      {isDashOpen && (
        <div className="absolute right-4 top-16 z-50 w-64 overflow-hidden rounded-2xl border border-default-200 bg-background shadow-xl">
          {/* User Info */}
          <div className="border-b border-default-200 p-4">
            <h4 className="font-semibold text-foreground">{user?.name}</h4>
            <p className="text-sm font-mono">{user?.email}</p>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <Link className="cursor-pointer" href={`/dashboard/${role}/profile`}>
            
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-danger/10">
              <FiUser className="text-default-500" />
              <span className="font-mono">My Profile</span>
            </button>
            </Link>

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-danger/10">
              <RiDashboardLine className="text-default-500" />
              <Link href={`/dashboard/${role}`} className="font-mono">
                Dashboard
              </Link>
            </button>

            <div className="my-2 border-t border-default-200" />

            <button
              onClick={handleLogOut}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-danger transition hover:bg-danger/10 cursor-pointer"
            >
              <MdOutlineLogout />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
        </header>

          
      </nav>

      
  );
};

export default Navbar;
