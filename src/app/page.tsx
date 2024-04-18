import Hero from "@/app/_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Search Bar + Categories */}
      <CategorySearch />
      {/* Popular Doctor List */}
      <DoctorList />
    </>
  );
}
