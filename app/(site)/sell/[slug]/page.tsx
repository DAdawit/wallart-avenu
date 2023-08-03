import React from "react";
import { getSellCategory } from "@/sanity/sanity-utils";
import Images from "../../common/Images";
import Image from "next/image";
type Props = {
  params: { slug: string };
};
const page = async ({ params }: Props) => {
  const slug = params.slug;
  const sellCategories = await getSellCategory(slug);
  // console.log(sellCategories);

  return (
    <>
      <section className="bg-bgPrimary">
        <div className="container mx-auto px-10 sm:px-5 min-h-screen">
          <div className="py-5">
            <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
              {sellCategories.name}
            </h1>
            <div className="flex justify-center pt-3">
              <Image
                src="/logoOnly.png"
                height={1000}
                width={1000}
                alt="logo image"
                className="h-16 w-16 object-contain self-center text-orange-800"
              />
            </div>
          </div>
          <Images images={sellCategories?.images} />
        </div>
      </section>
    </>
  );
};

export default page;
