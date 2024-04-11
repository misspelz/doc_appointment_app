import Hero from "@/app/_components/Hero";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Search Bar + Categories */}
      <CategorySearch />
    </>
  );
}
