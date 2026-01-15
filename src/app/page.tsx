import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/ServiceHighlights";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryGrid from "@/components/CategoryGrid";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceHighlights />
      <FeaturedProducts />
      <CategoryGrid />
      <Newsletter />
    </div>
  );
}
