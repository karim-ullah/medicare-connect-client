import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
  FiShield,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

const stats = [
  { value: "284+", label: "Verified doctors" },
  { value: "18k+", label: "Patients supported" },
  { value: "94k+", label: "Appointments booked" },
  { value: "4.9/5", label: "Average patient rating" },
];

const values = [
  {
    icon: FiShield,
    title: "Verified care only",
    description:
      "Every doctor profile and credential is reviewed before it appears in the directory.",
  },
  {
    icon: FiUsers,
    title: "Patient-first design",
    description:
      "Clear fees, real availability, and a booking flow that removes unnecessary steps.",
  },
  {
    icon: FiHeart,
    title: "Transparent always",
    description:
      "No hidden charges and no confusing options — just the information you need to choose.",
  },
];

const AboutUs = () => {
  return (
    <main>
      <section className="bg-[#eef8f7] py-16 sm:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="section-kicker">About MediCare Connect</p>
            <h1 className="section-title mt-3">
              Healthcare booking that puts patients first
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We connect patients with trusted specialists and make booking an
              appointment as simple as it should be — no phone tag, no waiting
              rooms, no guesswork.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/find-doctors" className="primary-link gap-2 px-6">
                Find a doctor <FiArrowRight aria-hidden="true" />
              </Link>
              <Link href="/register" className="secondary-link px-6">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-kicker">Our mission</p>
            <h2 className="section-title mt-3">
              Less friction between you and better care
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Finding the right clinician often means juggling phone calls,
              scattered reviews, and unclear pricing. MediCare Connect brings all
              of that into one clear, reliable place.
            </p>
            <p>
              Patients can compare specialists by experience, location, and fee,
              then book an available slot in minutes. Clinics get a simple way to
              manage schedules and appointment requests without the paperwork.
            </p>
            <ul className="space-y-3">
              {[
                "Verified doctor profiles and credentials",
                "Live availability and upfront consultation fees",
                "Secure, private handling of your information",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheckCircle
                    className="mt-1 shrink-0 text-[#087f78]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white p-6 text-center sm:p-8">
                <dd className="text-3xl font-bold text-[#087f78] sm:text-4xl">
                  {value}
                </dd>
                <dt className="mt-2 text-sm text-slate-500">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="section-kicker">What we value</p>
            <h2 className="section-title mt-3">
              Principles behind every appointment
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[#e4f5f2] text-[#087f78]">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
