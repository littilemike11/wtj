import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaArrowRight } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "The Show", href: "/the-show" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const coverageLinks = [
  { name: "Film", href: "/coverage/film" },
  { name: "Television", href: "/coverage/television" },
  { name: "Entertainment", href: "/coverage/entertainment" },
  { name: "Music", href: "/coverage/music" },
  { name: "Exclusive Interviews", href: "/coverage/interviews" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    icon: FaTiktok,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-8">
        {/* Brand Information */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="inline-block font-montserrat text-3xl font-black uppercase tracking-wide text-white transition-colors hover:text-[#e8001a]"
          >
            WTJ<span className="text-[#e8001a]">.</span>
          </Link>

          <p className="mt-4 max-w-xs font-roboto-condensed text-base leading-relaxed text-neutral-400">
            Where culture meets conversation. Bringing people together through
            entertainment, stories, and authentic conversations.
          </p>

          {/* Brand Tagline */}
          <p className="mt-5 font-oswald text-sm font-medium uppercase tracking-[2px] text-white">
            Culture
            <span className="px-2 text-[#e8001a]">X</span>
            Conversation
            <span className="px-2 text-[#e8001a]">X</span>
            Community
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-montserrat text-sm font-extrabold uppercase tracking-wider text-white">
            Explore
          </h3>

          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-oswald text-base font-light uppercase text-neutral-400 transition-colors duration-300 hover:text-[#e8001a]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cultural Coverage */}
        <div>
          <h3 className="mb-5 font-montserrat text-sm font-extrabold uppercase tracking-wider text-white">
            Cultural Coverage
          </h3>

          <ul className="flex flex-col gap-3">
            {coverageLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-oswald text-base font-light uppercase text-neutral-400 transition-colors duration-300 hover:text-[#e8001a]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="mb-5 font-montserrat text-sm font-extrabold uppercase tracking-wider text-white">
            Stay Connected
          </h3>

          <p className="mb-5 font-roboto-condensed text-base leading-relaxed text-neutral-400">
            Join the conversation and keep up with everything happening across
            WTJ.
          </p>

          {/* Newsletter CTA */}
          <Link
            href="/newsletter"
            className="group inline-flex items-center gap-3 border border-[#e8001a] px-5 py-3 font-oswald text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#e8001a]"
          >
            Join Our Newsletter
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Social Media */}
          <div className="mt-7 flex items-center gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-xl text-neutral-400 transition-colors duration-300 hover:text-[#e8001a]"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">
          {/* Copyright */}
          <p className="font-roboto-condensed text-sm text-neutral-500">
            © 2026 Where's The Juice. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-oswald text-xs uppercase text-neutral-500 transition-colors hover:text-[#e8001a]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="font-oswald text-xs uppercase text-neutral-500 transition-colors hover:text-[#e8001a]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
