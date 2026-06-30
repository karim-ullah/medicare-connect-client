import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineHeart,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-[#0F3359] text-gray-300">
      <div className="container py-10">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                <HiOutlineHeart className="text-white text-2xl" />
              </div>

              <h2 className="text-3xl font-bold text-white">
                MediCare
                <span className="text-cyan-400">Connect</span>
              </h2>
            </div>

            <p className="leading-8 text-gray-400">
              Connecting patients with world-class healthcare professionals.
              Your health, our priority.
            </p>

            <div className="flex gap-4 mt-8">

              {[
                FaFacebookF,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (
                <Link
                  href="/"
                  key={index}
                  className="w-12 h-12 rounded-xl bg-white/10 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                >
                  <Icon className="text-lg text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-8">
              Quick Links
            </h3>

            <div className="space-y-5">

              {[
                "Home",
                "Find Doctors",
                "About Us",
                "Contact Us",
                "Patient Login",
                "Register",
              ].map((item) => (
                <Link
                  href="/"
                  key={item}
                  className="block hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Specializations */}

          <div>
            <h3 className="text-white text-xl font-semibold mb-8">
              Specializations
            </h3>

            <div className="space-y-5">

              {[
                "Cardiology",
                "Neurology",
                "Orthopedics",
                "Pediatrics",
                "Dermatology",
                
              ].map((item) => (
                <Link
                  href="/"
                  key={item}
                  className="block hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-8">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <HiOutlineLocationMarker className="text-cyan-400 text-2xl mt-1" />

                <p>
                  123 Healthcare Blvd,
                  <br />
                  Medical District,
                  <br />
                  New York, NY 10001
                </p>
              </div>

              <div className="flex gap-4">
                <HiOutlinePhone className="text-cyan-400 text-xl mt-1" />

                <p>+1 (800) 555-MEDI</p>
              </div>

              <div className="flex gap-4">
                <HiOutlineMail className="text-cyan-400 text-xl mt-1" />

                <p>support@medicareconnect.com</p>
              </div>

            </div>

            {/* Emergency */}

            <div className="mt-10 border border-red-500/40 rounded-2xl bg-[#402F45] p-6">

              <p className="text-red-400 font-semibold uppercase text-sm">
                Emergency Hotline
              </p>

              <h2 className="text-4xl text-white font-bold mt-2">
                911
              </h2>

              <p className="text-red-300 mt-2">
                or +1 (800) 911-HELP
              </p>

              <p className="text-red-300 font-medium mt-2">
                Available 24/7
              </p>

            </div>

          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 pt-8 mt-6 flex flex-col lg:flex-row justify-between items-center gap-6">

          <p className="text-gray-400">
            © 2026 MediCare Connect. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link href="/" className="hover:text-cyan-400">
              Privacy Policy
            </Link>

            <Link href="/" className="hover:text-cyan-400">
              Terms of Service
            </Link>

            <Link href="/" className="hover:text-cyan-400">
              HIPAA Compliance
            </Link>

            <Link href="/" className="hover:text-cyan-400">
              Cookie Policy
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
}