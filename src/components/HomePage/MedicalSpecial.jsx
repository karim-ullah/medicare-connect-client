"use client";

import Reveal from "@/Animation/Reveal";
import { BiHeart } from "react-icons/bi";
import { FaBaby, FaBone, FaBrain, FaLaptopMedical, FaMicroscope } from "react-icons/fa";



const specializations = [
  {
    title: "Cardiology",
    subtitle: "Heart & Cardiovascular",
    icon: BiHeart,
    iconColor: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    title: "Neurology",
    subtitle: "Brain & Nervous System",
    icon: FaBrain,
    iconColor: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    title: "Orthopedics",
    subtitle: "Bones & Joints",
    icon: FaBone,
    iconColor: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    title: "Pediatrics",
    subtitle: "Child Healthcare",
    icon: FaBaby,
    iconColor: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    title: "Dermatology",
    subtitle: "Skin & Hair",
    icon: FaLaptopMedical,
    iconColor: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    title: "Oncology",
    subtitle: "Cancer Treatment",
    icon: FaMicroscope,
    iconColor: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
];

export default function Specializations() {
  return (
    <section className="py-16">
      <Reveal>

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold uppercase tracking-widest text-xs">
            Browse by Category
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Medical Specializations
          </h2>

          <p className="mt-4 text-slate-500 text-lg">
            Find the right specialist for your healthcare needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specializations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`${item.bg} ${item.border}
                border rounded-3xl p-4 text-center
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                cursor-pointer group`}
              >
                <div
                  className="w-12 h-12 rounded-2xl bg-white
                  shadow-md flex items-center justify-center
                  mx-auto mb-6 group-hover:scale-110
                  transition"
                >
                  <Icon
                    className={`${item.iconColor}`}
                    size={30}
                    strokeWidth={2}
                  />
                </div>

                <h3 className="font-semibold text-lg text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      </Reveal>
    </section>
  );
}