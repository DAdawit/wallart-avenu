import { getCategories } from "@/sanity/sanity-utils";
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import SellCategories from "./components/Home/SellCategories";
export default async function Home() {
  const categories = await getCategories();

  return (
    <main>
      <Hero />
      <Categories categories={categories} />
      <SellCategories />
    </main>
  );
}
