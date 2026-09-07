"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FiChevronDown, FiMenu, FiUser, FiX } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety, MdOutlineLogout } from "react-icons/md";
import toast from "react-hot-toast";

const links = [
  { href: "/", label: "Home" },
  { href: "/find-doctors", label: "Find doctors" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const accountRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  useEffect(() => {
    const closeAccount = (event) => {
      if (!accountRef.current?.contains(event.target)) setIsAccountOpen(false);
    };
    document.addEventListener("pointerdown", closeAccount);
    return () => document.removeEventListener("pointerdown", closeAccount);
  }, []);

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("You’re signed out");
    window.location.assign("/");
  };

  const navLinks = links.map((link) => {
    const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
    return (
      <li key={link.href}>
        <Link href={link.href} onClick={() => setIsMenuOpen(false)} aria-current={active ? "page" : undefined} className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${active ? "bg-[#e4f5f2] text-[#08645f]" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}>
          {link.label}
        </Link>
      </li>
    );
  });

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="container relative flex h-18 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 rounded-lg" aria-label="MediCare Connect home">
          <span className="grid size-9 place-items-center rounded-xl bg-[#087f78] text-white"><MdOutlineHealthAndSafety size={21} aria-hidden="true" /></span>
          <span className="text-lg font-bold tracking-tight text-slate-950">MediCare<span className="text-[#087f78]"> Connect</span></span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">{navLinks}</ul>
        <div className="flex items-center gap-2">
          {user ? (
            <div ref={accountRef} className="relative">
              <button type="button" onClick={() => setIsAccountOpen((open) => !open)} aria-expanded={isAccountOpen} aria-haspopup="menu" className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 text-left transition hover:border-teal-300 hover:bg-teal-50">
                <Avatar size="sm"><Avatar.Image alt="" src={user.image} /><Avatar.Fallback>{user.name?.slice(0, 2).toUpperCase()}</Avatar.Fallback></Avatar>
                <span className="hidden max-w-28 truncate text-sm font-semibold sm:block">{user.name}</span>
                <FiChevronDown className={`transition ${isAccountOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {isAccountOpen && (
                <div role="menu" className="absolute right-0 top-13 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  <div className="border-b border-slate-100 px-3 py-3"><p className="truncate text-sm font-semibold">{user.name}</p><p className="truncate text-xs text-slate-500">{user.email}</p></div>
                  <Link role="menuitem" href={`/dashboard/${user.role}`} className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-slate-100"><RiDashboardLine aria-hidden="true" /> Dashboard</Link>
                  <Link role="menuitem" href={`/dashboard/${user.role}/profile`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-slate-100"><FiUser aria-hidden="true" /> My profile</Link>
                  <button role="menuitem" onClick={handleLogOut} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-700 hover:bg-red-50"><MdOutlineLogout aria-hidden="true" /> Sign out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex"><Link className="secondary-link px-4 py-2" href="/login">Log in</Link><Link className="primary-link px-4 py-2" href="/register">Create account</Link></div>
          )}
          <button type="button" className="grid size-11 place-items-center rounded-xl border border-slate-200 text-slate-700 md:hidden" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        {isMenuOpen && (
          <div id="mobile-menu" className="absolute inset-x-4 top-20 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl md:hidden">
            <ul className="space-y-1">{navLinks}</ul>
            {!user && <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 sm:hidden"><Link className="secondary-link" href="/login">Log in</Link><Link className="primary-link" href="/register">Create account</Link></div>}
          </div>
        )}
      </div>
    </nav>
  );
}
