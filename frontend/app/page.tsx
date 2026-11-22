import Image from "next/image";
import AboutUs from "./components/AboutUs";
import FeaturedStories from "./components/FeaturedStories";
import HeroSection from "./components/HeroSection";
import NewsletterSection from "./components/NewsletterSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedStories />
      <NewsletterSection />
      <AboutUs />
    </div>
  );
}
