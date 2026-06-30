import Reveal from "@/Animation/Reveal";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (

    <>
    <Reveal>

    <section className="relative isolate overflow-hidden max-h-fit flex items-center py-16 w-full">
      {/* Background */}


      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&h=900&fit=crop&auto=format"
          className="h-full w-full object-cover scale-110 animate-[pulse_12s_linear_infinite]"
          alt=""
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/30"></div>

        {/* Blur Circle */}
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"></div>

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"></div>
      </div>

      <div className="relative z-20 container w-full">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-cyan-300 backdrop-blur-md">
              Trusted by 18,000+ Patients
            </span>

            <h1 className="mt-8 text-6xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Your Health,
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Priority.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Connect with experienced doctors, schedule appointments
              effortlessly and manage your healthcare journey in one secure
              platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button className="rounded-xl px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-cyan-400">
                <Link href={'/find-doctors'}>
                
                Find Doctor →
                </Link>
              </Button>

              <Button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-md transition hover:bg-white/10">
                <Link href={'/find-doctors'}>
                
                Book Appointment
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex justify-center relative">
            <div className="grid grid-cols-2 gap-y-20 gap-x-10">
              {/* Floating Card */}

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                <p className="text-white font-semibold">Appointment Today</p>

                <p className="text-cyan-400 text-3xl font-bold mt-2">1,248</p>
              </div>

              <div className=" rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                <p className="text-white font-semibold">Appointment Today</p>

                <p className="text-cyan-400 text-3xl font-bold mt-2">1,248</p>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                <p className="text-white font-semibold">Patient Rating</p>

                <p className="text-yellow-400 text-3xl font-bold mt-2">★ 4.9</p>
              </div>
              <div className=" rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl">
                <p className="text-white font-semibold">Patient Rating</p>

                <p className="text-yellow-400 text-3xl font-bold mt-2">★ 4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
    </>
  );
};

export default Hero;
