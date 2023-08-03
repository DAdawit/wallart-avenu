import { getCategories, getGallery } from "@/sanity/sanity-utils";
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import SellCategories from "./components/Home/SellCategories";
import Services from "./components/Home/Services";
import Galleries from "./components/Home/Galleries";
import Testimonials from "./components/Home/Testimonials";
import Pricing from "./components/Home/Pricing";
import ContactUs from "./components/Home/Contact";
export default async function Home() {
  const categories = await getCategories();
  const galleries = await getGallery();
  // console.log(galleries);

  return (
    <main className="bg-bgPrimary">
      <Hero />
      <Categories categories={categories} />
      <SellCategories />
      <Services />
      <Galleries galleries={galleries} />
      <Testimonials />
      <Pricing />
      <ContactUs />
    </main>
  );
}
