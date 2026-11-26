import Article from "../components/Article";
const articleExample: Article = {
  id: 1,
  category: "Testing",
  title: "test example",
  image: "/images/red-img.jpg",
  href: "/articles/modern-cinema",
};
export default function AboutUs() {
  return (
    <>
      <div>
        hi
        <Article article={articleExample} />
      </div>
    </>
  );
}
