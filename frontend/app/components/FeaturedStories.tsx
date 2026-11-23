import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Article from "./Article";

const featuredArticles = [
  {
    id: 1,
    category: "Film",
    title: "The Evolution of Modern Cinema and Its Cultural Impact",
    image: "/images/red-img.jpg",
    href: "/articles/modern-cinema",
  },
  {
    id: 2,
    category: "Television",
    title: "Why Television Continues to Shape Pop Culture",
    image: "/images/red-img.jpg",
    href: "/articles/television-pop-culture",
  },
  {
    id: 3,
    category: "Entertainment",
    title: "The Conversations Everyone Is Having Right Now",
    image: "/images/red-img.jpg",
    href: "/articles/entertainment-trends",
  },
  {
    id: 4,
    category: "Music",
    title: "How Music Connects Communities and Generations",
    image: "/images/red-img.jpg",
    href: "/articles/music-culture",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="w-full bg-white py-8">
      {/* Section Heading */}
      <div className="mx-auto flex w-[95%] items-center justify-between">
        {/* border-b-2 border-[#e8001a] */}
        <h2 className="font-montserrat text-2xl font-extrabold uppercase text-black sm:text-3xl md:text-[40px]">
          Featured <span className="text-[#e8001a]">Stories</span>
        </h2>

        <Link
          href="/articles"
          className="ml-4 flex shrink-0 items-center gap-2 font-oswald text-sm font-light uppercase text-black transition-colors duration-300 hover:text-[#e8001a] sm:text-base md:text-xl"
        >
          View All Articles
          <FaArrowRight />
        </Link>
      </div>

      {/* Featured Article Cards */}
      <div className="mx-auto mt-3 grid w-[95%] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
