"use client";

import { useState, FormEvent } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    // TODO: Connect to your newsletter API or email marketing service.
    console.log("Newsletter signup:", email);

    setSubmitted(true);
    setEmail("");
  };
  const COPY = {
    Tagliner: "The weekly squeeze",
    Headliner: "Stay in the Loop",
    Header: "Get the Juice",
    SubHeading: "In your inbox",
    content:
      "Get the latest conversations, entertainment news, exclusive interviews, and cultural stories delivered straight to your inbox. Don't miss a moment of what's happening.",
  };

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-black px-5 py-16 sm:py-20">
      {/* Background Accent */}
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#e8001a]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Small Label */}
        <div className="mb-4 flex items-center gap-2">
          <FaEnvelope className="text-[#e8001a]" />
          <span className="font-oswald text-sm uppercase tracking-[4px] text-neutral-300">
            {COPY.Tagliner}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-montserrat text-3xl font-black uppercase leading-tight text-white sm:text-4xl md:text-5xl">
          {COPY.Header}
          <br />
          <span className="text-[#e8001a]">{COPY.SubHeading}</span>
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl font-roboto-condensed text-base leading-relaxed text-neutral-300 sm:text-lg">
          {COPY.content}
        </p>

        {/* Newsletter Form */}
        {submitted ? (
          <div
            role="status"
            className="mt-8 border border-[#e8001a] bg-[#e8001a]/10 px-6 py-4 text-white"
          >
            <p className="font-oswald text-lg uppercase">You're on the list!</p>
            <p className="mt-1 text-sm text-neutral-300">
              Thanks for subscribing to WTJ.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          >
            {/* Email Input */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 border border-neutral-600 bg-[#171717] px-5 py-4 font-roboto-condensed text-base text-white outline-none placeholder:text-neutral-500 transition-colors focus:border-[#e8001a]"
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              aria-label="subscribe to newsletter"
              className="flex cursor-pointer items-center justify-center gap-3 bg-[#e8001a] px-7 py-4 font-oswald text-base font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#b90015]"
            >
              Subscribe
              <FaArrowRight aria-hidden={true} />
            </button>
          </form>
        )}

        {/* Privacy Text */}
        <p className="mt-5 text-xs text-neutral-500">
          No spam. Just good conversations and great content.
        </p>
      </div>
    </section>
  );
}
