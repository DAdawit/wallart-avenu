import { getAllImages } from "@/sanity/sanity-utils";
import React from "react";
import Images from "../components/Category/Images";
import Image from "next/image";

const page = async () => {
  const allImages = await getAllImages();

  return (
    <>
      <section className="bg-bgPrimary">
        <div className="">
          <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider pt-5">
            All Images
          </h1>
          <div className="flex justify-center py-3">
            <Image
              src="/logoOnly.png"
              height={1000}
              width={1000}
              alt="logo image"
              className="h-16 w-16 object-contain self-center text-orange-800"
            />
          </div>
        </div>
        <div className="container mx-auto px-10 sm:px-5">
          <Images images={allImages} />
        </div>
      </section>
    </>
  );
};

export default page;
