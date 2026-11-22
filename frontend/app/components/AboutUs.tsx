import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="w-full bg-[#111111] px-5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* About Content */}
        <div className="order-2 lg:order-1">
          {/* Section Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#e8001a]" />
            <span className="font-oswald text-sm font-medium uppercase tracking-[4px] text-[#e8001a]">
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-montserrat text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            More Than
            <br />
            Just a
            <br />
            <span className="text-[#e8001a]">Conversation.</span>
          </h2>

          {/* Description */}
          <div className="mt-7 max-w-xl space-y-5 font-roboto-condensed text-base leading-relaxed text-neutral-300 sm:text-lg">
            <p>
              At Where's The Juice, we're all about bringing people together
              through the culture, stories, and conversations that shape our
              world.
            </p>

            <p>
              From film and television to music and entertainment, we explore
              the topics everyone's talking about, spotlight unique voices, and
              create spaces for authentic conversations.
            </p>

            <p>
              Whether it's an exclusive interview, a cultural conversation, or
              the latest entertainment buzz, we're here to keep the energy going
              and the conversations flowing.
            </p>
          </div>

          {/* Brand Statement */}
          <div className="mt-8 border-l-2 border-[#e8001a] pl-5">
            <p className="font-oswald text-sm font-medium uppercase tracking-[3px] text-white sm:text-base">
              Culture
              <span className="px-2 text-[#e8001a]">X</span>
              Conversation
              <span className="px-2 text-[#e8001a]">X</span>
              Community
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-4 bg-[#e8001a] px-7 py-4 font-oswald text-base font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#b90015]"
          >
            Learn More About Us
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* About Image */}
        <div className="order-1 lg:order-2">
          <div className="group relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-sm">
            <Image
              src="/img/about-wtj.jpg"
              alt="Where's The Juice team and community"
              fill
              sizes="(max-width: 1024px) 95vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Image Accent */}
            <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-[#e8001a]" />

            {/* Image Text */}
            <div className="absolute bottom-6 left-6">
              <p className="font-montserrat text-2xl font-black uppercase text-white sm:text-3xl">
                Where's
                <br />
                The Juice?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
