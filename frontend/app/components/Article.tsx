import Link from "next/link";
import Image from "next/image";
type Article = {
  id: number;
  href: string;
  image: string;
  title: string;
  category: string; //Would be a later category type
};

const Article: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <>
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
            <span className="mb-3 w-fit bg-[#e8001a] px-3 py-2 font-oswald text-xs font-extrabold uppercase sm:text-sm">
              {article.category}
            </span>

            {/* Article Title */}
            <h3 className="max-w-[95%] font-montserrat text-base font-extrabold leading-snug sm:text-lg">
              {article.title}
            </h3>
          </div>
        </Link>
      </article>
    </>
  );
};

export default Article;
