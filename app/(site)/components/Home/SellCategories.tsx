import { getSellCategories } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SellCategories = async () => {
  const sellingCategories = await getSellCategories();
  // console.log(sellingCategories);

  return (
    <>
      <section className="container mx-auto px-5 sm:px-0 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 py-10">
        {sellingCategories.map((item) => (
          <div key={item._id} className="w-full relative">
            <Image
              src={`${item.coverImage}`}
              height={1000}
              width={1000}
              alt="breakfast"
              className="w-full h-80 object-cover rounded-xl brightness-75 hover:brightness-90 hover:scale-105 transition-all"
            />
            <div className="absolute bottom-0 py-5 w-full bg-black opacity-70 rounded-xl flex flex-col justify-center">
              <h1 className="text-10 text-center text-white text-lg font-bold tracking-wider">
                {item.name}
              </h1>
              <Link
                href={`${item.slug}`}
                className="text-center self-center text-white hover:underline underline-offset-3 border-2 border-white px-3 py-1 rounded-full text-sm tracking-wider"
              >
                shop now
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SellCategories;
