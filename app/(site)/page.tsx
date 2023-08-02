import { getCategories } from "@/sanity/sanity-utils";
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import SellCategories from "./components/Home/SellCategories";
import Services from "./components/Home/Services";
export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="bg-[#231f1f]">
      <Hero />
      <Categories categories={categories} />
      <SellCategories />
      <Services />
    </main>
  );
}
