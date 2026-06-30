"use client";

import Reveal from "@/Animation/Reveal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiAward, BiCheckCircle, BiStar } from "react-icons/bi";
import { BsArrowRight, BsShieldCheck } from "react-icons/bs";
import { CgLock } from "react-icons/cg";


const features = [
  {
    icon: BsShieldCheck,
    title: "Verified Specialists",
    description:
      "Every doctor is board-certified and thoroughly vetted before joining our platform.",
  },
  {
    icon: CgLock,
    title: "Instant Booking",
    description:
      "Book appointments in minutes with real-time schedule availability.",
  },
  {
    icon: BiAward,
    title: "Top-Rated Care",
    description:
      "Average doctor rating of 4.8/5 from thousands of happy patients.",
  },
  {
    icon: BiCheckCircle,
    title: "Secure & Confidential",
    description:
      "HIPAA-compliant platform with bank-level encryption for your health data.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <Reveal>

            <span className="uppercase tracking-widest text-sky-600 font-semibold text-sm">
              Why Medicare Connect
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              The Smarter Way to Access Healthcare
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              We're redefining healthcare accessibility by combining
              cutting-edge technology with compassionate care.
              Our platform puts you in control of your health journey.
            </p>
            </Reveal>


          <Reveal>

            <div className="mt-10 space-y-7">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-5 group"
                  >
                    <div
                      className="h-14 w-14 rounded-2xl bg-sky-100
                      flex items-center justify-center
                      group-hover:bg-sky-600
                      transition duration-300"
                    >
                      <Icon
                        className="text-sky-600 group-hover:text-white"
                        size={24}
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-xl text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-slate-500 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button
              className="mt-10 inline-flex items-center gap-3
              rounded-xl px-7 py-4
              text-white font-semibold
              hover:bg-sky-700 transition"
            >
              Get Started Free
              <BsArrowRight size={18} />
            </Button>
          </Reveal>



          </div>

          {/* Right Side */}

          <Reveal>

          <div className="relative flex justify-center">

            <div className="relative w-full max-w-lg">

              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=700&fit=crop&auto=format"
                alt="Healthcare"
                width={700}
                height={650}
                className="rounded-3xl object-cover shadow-2xl"
              />

              {/* Top Card */}

              <div
                className="absolute -top-6 right-0
                bg-sky-700 text-white
                rounded-2xl p-5 shadow-xl"
              >
                <p className="text-xs text-sky-200">
                  Appointments Today
                </p>

                <h3 className="text-4xl font-bold mt-1">
                  1,284
                </h3>

                <p className="text-xs text-sky-200 mt-1">
                  ↑ 12% from yesterday
                </p>
              </div>

              {/* Bottom Card */}

              <div
                className="absolute -bottom-6 -left-6
                bg-white rounded-2xl
                shadow-2xl p-5"
              >
                <p className="text-sm text-slate-500">
                  Patient Satisfaction
                </p>

                <h3 className="text-4xl font-bold text-sky-700 mt-1">
                  98.2%
                </h3>

                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <BiStar
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
          </Reveal>


        </div>

      </div>
    </section>
  );
}