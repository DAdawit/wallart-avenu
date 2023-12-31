import { getCarosoles, getCategories, getGallery } from "@/sanity/sanity-utils";
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import SellCategories from "./components/Home/SellCategories";
import Services from "./components/Home/Services";
import Galleries from "./components/Home/Galleries";
import Testimonials from "./components/Home/Testimonials";
import Pricing from "./components/Home/Pricing";
import ContactUs from "./components/Home/Contact";
import { Toaster } from "react-hot-toast";
import AboutUs from "./components/Home/AboutUs";
import Carosole from "./components/Home/Carosole";

export default async function Home() {
  const categories = await getCategories();
  const galleries = await getGallery();
  const carosoles = await getCarosoles();
  // console.log(carosoles);

  return (
    <main className="bg-bgPrimary">
      <Toaster />
      <Carosole carosoles={carosoles} />
      <section id="about">
        <AboutUs />
      </section>
      <Categories categories={categories} />
      <SellCategories />
      <section id="services">
        <Services />
      </section>
      <Galleries galleries={galleries} />
      <Testimonials />
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
    </main>
  );
}
