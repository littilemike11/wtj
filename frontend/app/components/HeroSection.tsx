import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative border flex min-h-[300px] h-[calc(100vh-4rem)] w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mov"
      >
        your browser does not support video tag
      </video>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t sm:bg-gradient-to-r from-[#160001] via-[rgba(41,4,4,0.75)] to-transparent" />

      {/* Hero Content */}
      <div className="flex flex-col justify-end sm:justify-center min-h-[300px] h-[calc(100vh-8rem)] relative z-10 ml-[5%] mt-12  max-w-4xl animate-[fadeIn_2s_ease-in-out] text-white">
        {/* Tagline */}

        <p className="font-oswald mb-2 text-base font-normal uppercase tracking-[0.2em] sm:text-xl md:text-2xl lg:text-[25px] lg:tracking-[0.5rem]">
          Culture
          <span className="px-2 font-black text-[#f30707]">X</span>
          Conversation
          <span className="px-2 font-black text-[#f30707]">X</span>
          Community
        </p>

        {/* Main Heading */}
        <h1 className="hidden mb-5 sm:block font-montserrat text-5xl font-black uppercase leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          Real
          <br />
          Convos.
          <br />
          <span className="text-[#e8001a]">Good Vibes.</span>
        </h1>

        {/* Search Bar */}
        <SearchBar />

        {/* Watch The Show Link */}
        <div className="mt-8">
          <Link
            href="/the-show"
            className="group inline-flex items-center gap-5 no-underline"
          >
            {/* Play Button */}
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white transition-all duration-500 group-hover:border-[#e8001a] group-hover:bg-[#e8001a] sm:h-16 sm:w-16">
              <FaPlay className="ml-1 text-xl text-white transition-transform duration-300 group-hover:scale-110" />
            </span>

            {/* Link Text */}
            <span className="font-oswald text-lg font-light uppercase tracking-[3px] text-white transition-colors duration-300 group-hover:text-[#e8001a] sm:text-xl md:text-[23px]">
              Watch The Show
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
