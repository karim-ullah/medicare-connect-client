import {
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const contactCards = [
  {
    icon: FiPhone,
    title: "Call us",
    value: "+1 (800) 555-6334",
    href: "tel:+18005556334",
  },
  {
    icon: FiMail,
    title: "Email us",
    value: "support@medicareconnect.com",
    href: "mailto:support@medicareconnect.com",
  },
  {
    icon: FiMapPin,
    title: "Visit us",
    value: "120 Wellness Avenue, Suite 300, Springfield",
  },
  {
    icon: FiClock,
    title: "Support hours",
    value: "Mon–Sat, 8:00 AM – 8:00 PM",
  },
];

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none";

const ContactUs = () => {
  return (
    <main className="py-14 sm:py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-kicker">Contact us</p>
          <h1 className="section-title mt-3">We&apos;re here to help</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Have a question about booking, your account, or a doctor&apos;s
            availability? Reach out and our support team will get back to you.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map(({ icon: Icon, title, value, href }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[#e4f5f2] text-[#087f78]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-500">
                  {title}
                </h2>
                {href ? (
                  <a
                    href={href}
                    className="mt-1 block break-words font-semibold text-slate-950 hover:text-[#087f78]"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold text-slate-950">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-slate-950">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill in the form and we&apos;ll respond as soon as we can.
            </p>

            <form
              action="mailto:support@medicareconnect.com"
              method="post"
              encType="text/plain"
              className="mt-6 flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none"
                />
              </label>

              <button type="submit" className="primary-link w-full px-6 sm:w-auto">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
