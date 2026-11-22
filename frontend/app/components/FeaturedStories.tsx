import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const featuredArticles = [
  {
    id: 1,
    category: "Film",
    title: "The Evolution of Modern Cinema and Its Cultural Impact",
    image: "/img/red-img.jpg",
    href: "/articles/modern-cinema",
  },
  {
    id: 2,
    category: "Television",
    title: "Why Television Continues to Shape Pop Culture",
    image: "/img/red-img.jpg",
    href: "/articles/television-pop-culture",
  },
  {
    id: 3,
    category: "Entertainment",
    title: "The Conversations Everyone Is Having Right Now",
    image: "/img/red-img.jpg",
    href: "/articles/entertainment-trends",
  },
  {
    id: 4,
    category: "Music",
    title: "How Music Connects Communities and Generations",
    image: "/img/red-img.jpg",
    href: "/articles/music-culture",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="w-full bg-white py-8">
      {/* Section Heading */}
      <div className="mx-auto flex w-[95%] items-center justify-between">
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
          <article
            key={article.id}
            className="group relative overflow-hidden rounded-md"
          >
            <Link
              href={article.href}
              className="relative block aspect-[4/3] w-full"
            >
              {/* Article Image */}
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 47vw, 23vw"
                className="object-cover brightness-[40%] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Article Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                {/* Category Label */}
                <span className="mb-3 w-fit bg-[#f30707] px-3 py-2 font-oswald text-xs font-extrabold uppercase sm:text-sm">
                  {article.category}
                </span>

                {/* Article Title */}
                <h3 className="max-w-[95%] font-montserrat text-base font-extrabold leading-snug sm:text-lg">
                  {article.title}
                </h3>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
