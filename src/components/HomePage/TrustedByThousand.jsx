"use client";

import Reveal from "@/Animation/Reveal";
import { BiStar } from "react-icons/bi";
import { FaStethoscope, FaUserSecret } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";



const stats = [
  {
    icon: FaStethoscope,
    value: "284+",
    title: "Expert Doctors",
  },
  {
    icon: FaUserSecret,
    value: "18,420+",
    title: "Patients Served",
  },
  {
    icon: FaCalendarDays,
    value: "94,730+",
    title: "Appointments",
  },
  {
    icon: BiStar,
    value: "52,180+",
    title: "Patient Reviews",
  },
];

export default function StatsSection() {
  return (
    <>
    <Reveal>

    <section className="relative overflow-hidden bg-[#0D79B7] py-24">

      {/* Background Circles */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 " />

      <div className="absolute -bottom-52 -right-40 h-96 w-96 rounded-full bg-cyan-400/10" />

      {/* Content */}

      <div className="container">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by Thousands
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Numbers that reflect our commitment to healthcare excellence
          </p>

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group text-center"
              >

                {/* Icon */}

                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center
                  rounded-3xl bg-white/15 backdrop-blur-md
                  transition duration-300
                  group-hover:-translate-y-2 group-hover:bg-white/20"
                >
                  <Icon
                    className="text-white"
                    size={30}
                    strokeWidth={2}
                  />
                </div>

                {/* Number */}

                <h3 className="mt-8 text-3xl md:text-4xl font-extrabold text-white">
                  {item.value}
                </h3>

                {/* Label */}

                <p className="mt-3 text-lg text-blue-100">
                  {item.title}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
    </Reveal>
    </>
  );
}