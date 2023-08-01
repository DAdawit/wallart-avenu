import Image from "next/image";
import { getCategories, getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Hero from "./components/Home/Hero";
import Categories from "./components/Categories";
import { CategoryType } from "@/types/category";
export default async function Home() {
  const projects = await getProjects();
  const categories = await getCategories();

  return (
    <main>
      <Hero />

      <Categories categories={categories} />
    </main>
  );
}
