"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import {
  FiCalendar,
  FiCreditCard,
  FiHome,
  FiUser,
} from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import { MdGridView, MdKeyboardArrowRight, MdSchedule } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";

export default function Sidebar() {
  const pathName = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const role = user?.role;

  const patient = [
    {
      label: "Overview",
      href: "/dashboard/patient",
      icon: <FiHome size={18} />,
    },
    {
      label: "My Appointments",
      href: "/dashboard/patient/my-appointments",
      icon: <FiCalendar size={18} />,
    },
    {
      label: "Payment History",
      href: "/dashboard/patient/payment-history",
      icon: <FiCreditCard size={18} />,
    },
  ];

  const doctor = [
    {
      label: "Overview",
      href: "/dashboard/doctor",
      icon: <MdGridView size={18} />,
    },
    {
      label: "Schedule",
      href: "/dashboard/doctor/schedule",
      icon: <MdSchedule size={18} />,
    },
    {
      label: "Appointment Requests",
      href: "/dashboard/doctor/appointment-requests",
      icon: <VscRequestChanges size={18} />,
    },
    {
      label: "Prescriptions",
      href: "/dashboard/doctor/prescriptions",
      icon: <LuNewspaper size={18} />,
    },
    {
      label: "Profile",
      href: "/dashboard/doctor/profile",
      icon: <FiUser size={18} />,
    },
  ];

  const admin = [
    {
      label: "Overview",
      href: "/dashboard/admin",
      icon: <FiHome size={18} />,
    },
    {
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
      icon: <FiUser size={18} />,
    },
    {
      label: "Manage Doctors",
      href: "/dashboard/admin/manage-doctors",
      icon: <FaUserDoctor size={18} />,
    },
    {
      label: "Manage Appointments",
      href: "/dashboard/admin/manage-appointments",
      icon: <MdSchedule size={18} />,
    },
    {
      label: "Payment",
      href: "/dashboard/admin/payment",
      icon: <FiCreditCard size={18} />,
    },
  ];

  const menuItems =
    role === "patient" ? patient : role === "doctor" ? doctor : admin;

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Logout successfully");
    window.location.href = "/";
  };

  const navLinks = (
    <ul className="space-y-2 py-6">
      {menuItems.map((item, index) => {
        const isActive = pathName === item.href;
        return (
          <li key={index}>
            <Link
              href={item.href}
              className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-accent-soft font-semibold text-accent"
                  : "text-foreground hover:bg-accent-soft"
              }`}
            >
              <span className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </span>
              {isActive && <MdKeyboardArrowRight />}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="shrink-0">
      <Drawer>
        <Button variant="secondary" className="m-4 bg-background md:hidden">
          <FaBars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <nav className="flex flex-col gap-1">{navLinks}</nav>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>

      <aside className="sticky top-0 hidden h-screen w-64 overflow-y-auto border-r bg-surface md:block">
        <div className="flex min-h-full flex-col">
          <div className="border-b p-6">
            <h2 className="text-xl font-bold">
              <Link href="/">Medicare Connect</Link>
            </h2>
          </div>

          <nav className="flex-1 p-3">
            {/* userInfo */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-accent-soft px-3 py-4">
              <Avatar size="lg">
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>
                  {user?.name
                    ?.split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </Avatar.Fallback>
              </Avatar>
              <div className="min-w-0 leading-tight">
                <span className="block truncate font-medium capitalize">
                  {user?.name}
                </span>
                <span className="block text-sm capitalize text-muted">
                  {user?.role}
                </span>
              </div>
            </div>

            {navLinks}
          </nav>

          <div className="border-t px-3 py-6">
            <Button onClick={handleLogOut} fullWidth>
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}
