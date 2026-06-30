"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FiHome, FiUser, FiCalendar, FiSettings } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import { MdGridView, MdKeyboardArrowRight, MdSchedule } from "react-icons/md";
import { VscRequestChanges } from "react-icons/vsc";

export default function Sidebar() {

  const pathName = usePathname()
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const role = user?.role
  // const role = 'admin'


  const patient = [
    {
      label: "Overview",
      href: "/dashboard/patient",
      icon: <FiHome size={18} />,
    },
    {
      label: "My Appointments",
      href: "/dashboard/patient/my-appointments",
      icon: <FiUser size={18} />,
    },
    {
      label: "Payment History",
      href: "/dashboard/patient/payment-history",
      icon: <FiCalendar size={18} />,
    },
    {
      label: "My Reviews",
      href: "/dashboard/my-reviews",
      icon: <FiSettings size={18} />,
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
      label: "payment",
      href: "/dashboard/admin/payment",
      icon: <FiCalendar size={18} />,
    },
  ]

  const menuItems = role === 'patient' ? patient : role === 'doctor' ? doctor : admin
   const handleLogOut = async () => {
      await authClient.signOut();
      toast.success("Logout successfully");
      window.location.href = '/'
    };
  return (

    <>

    <Drawer>
      <Button variant="secondary" className={'block md:hidden mt-10 bg-background'}>
        <FaBars />
      
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav className="flex flex-col gap-1">
                <ul className="space-y-2 py-6">
          {menuItems.map((item,index) => {
            const isActive = pathName === item.href
            return (
              <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center justify-between gap-3 text-sm text-foreground ${isActive ? 'bg-accent/50' : ''}  rounded-xl py-2 px-2 transition hover:bg-accent/50`}
              >
                <div className="flex items-center gap-3">{item.icon}
                <span>{item.label}</span></div>
                {isActive && <MdKeyboardArrowRight/>}
              </Link>
              
            </li>
            )
          })}
        </ul>
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    
    <aside className="min-h-screen w-64 border-r bg-background flex flex-col hidden md:block">
      <div className="border-b p-6">
        <h2 className="text-xl font-bold"><Link href={'/'}>Medicare Connect</Link></h2>
      </div>

      

      <nav className="p-3 flex-1">
        {/* userInfo */}
        <div className="flex items-center gap-1.5 bg-gray-200 px-3 py-4 mt-4 rounded-xl">
        <Avatar size="lg">
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
          <span className="text-sm font-mono text-primary -mt-2">
            {user?.role}
          </span>
        </div>
      </div>

      {/* map link */}
        <ul className="space-y-2 py-6">
          {menuItems.map((item,index) => {
            const isActive = pathName === item.href
            return (
              <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center justify-between gap-3 text-sm text-foreground ${isActive ? 'bg-accent/50' : ''}  rounded-xl py-2 px-2 transition hover:bg-accent/50`}
              >
                <div className="flex items-center gap-3">{item.icon}
                <span>{item.label}</span></div>
                {isActive && <MdKeyboardArrowRight/>}
              </Link>
              
            </li>
            )
          })}
        </ul>
      </nav>

      <div className="border-t px-3 py-6">
        <Button onClick={handleLogOut} fullWidth>Logout</Button>
      </div>
    </aside>
    </>
  );
}
