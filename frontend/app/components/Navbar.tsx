"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const navLinks = [
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

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coverageOpen, setCoverageOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const closeMenu = () => {
    setMobileOpen(false);
    setCoverageOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black text-white">
      <div className="flex h-16 w-full items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          WTJ
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden h-full items-center lg:flex">
          <ul className="flex h-full items-center gap-7">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-oswald text-lg font-light uppercase transition-colors duration-300 hover:text-[#d73d3d] ${
                    isActive(link.href)
                      ? "font-extrabold text-[#d73d3d]"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Cultural Coverage Dropdown */}
            <li className="group relative flex h-full items-center">
              <button
                type="button"
                onClick={() => setCoverageOpen(!coverageOpen)}
                aria-expanded={coverageOpen}
                className={`flex items-center gap-2 font-oswald text-lg font-light uppercase transition-colors hover:text-[#d73d3d] ${
                  pathname.startsWith("/coverage")
                    ? "font-extrabold text-[#d73d3d]"
                    : "text-white"
                }`}
              >
                Cultural Coverage
                <FaChevronDown className="text-xs" />
              </button>

              <ul
                className={`absolute left-0 top-full min-w-52 bg-black py-2 shadow-xl ${
                  coverageOpen ? "block" : "hidden group-hover:block"
                }`}
              >
                {coverageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setCoverageOpen(false)}
                      className="block px-5 py-3 font-oswald text-sm uppercase text-white transition-colors hover:bg-[#171717] hover:text-[#d73d3d]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-oswald text-lg font-light uppercase transition-colors duration-300 hover:text-[#d73d3d] ${
                    isActive(link.href)
                      ? "font-extrabold text-[#d73d3d]"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media */}
          <div className="ml-8 flex items-center gap-6 border-l border-neutral-700 pl-7">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-xl text-white transition-colors duration-300 hover:text-[#d73d3d]"
                >
                  <Icon />
                </a>
              );
            })}

            <Link
              href="/search"
              aria-label="Search"
              className="text-xl text-white transition-colors duration-300 hover:text-[#d73d3d]"
            >
              <FaSearch />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          className="text-2xl text-white lg:hidden"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[300px] max-w-[85vw] flex-col bg-black transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between border-b border-neutral-700 px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-extrabold text-white"
          >
            WTJ
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="text-2xl text-white transition-colors hover:text-[#d73d3d]"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
          <ul className="flex flex-col gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-oswald text-xl uppercase transition-colors hover:text-[#d73d3d] ${
                    isActive(link.href)
                      ? "font-extrabold text-[#d73d3d]"
                      : "font-light text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile Coverage Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => setCoverageOpen(!coverageOpen)}
                aria-expanded={coverageOpen}
                className="flex w-full items-center justify-between font-oswald text-xl font-light uppercase text-white transition-colors hover:text-[#d73d3d]"
              >
                Cultural Coverage
                <FaChevronDown
                  className={`text-sm transition-transform ${
                    coverageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coverageOpen && (
                <ul className="mt-4 flex flex-col gap-4 border-l-2 border-[#d73d3d] pl-5">
                  {coverageLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="font-oswald text-base font-light uppercase text-neutral-300 transition-colors hover:text-[#d73d3d]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-oswald text-xl uppercase transition-colors hover:text-[#d73d3d] ${
                    isActive(link.href)
                      ? "font-extrabold text-[#d73d3d]"
                      : "font-light text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Social Links */}
          <div className="mt-auto flex items-center justify-center gap-8 border-t border-neutral-700 pt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-2xl text-white transition-colors hover:text-[#d73d3d]"
                >
                  <Icon />
                </a>
              );
            })}

            <Link
              href="/search"
              onClick={closeMenu}
              aria-label="Search"
              className="text-2xl text-white transition-colors hover:text-[#d73d3d]"
            >
              <FaSearch />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
