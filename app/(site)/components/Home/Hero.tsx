import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-96 md:h-screen w-screen relative">
        <Image
          src="/banner3.jpg"
          alt="spector"
          fill
          className="w-screen h-96 md:h-screen object-cover brightness-50"
          blurDataURL="/banner2.png"
        />
        <div className="absolute top-1/3  z-30 px-16 w-full flex justify-center">
          <Image
            src="/logoMain.png"
            width={1000}
            height={1000}
            alt="logo"
            className="object-contain w-80"
          />
        </div>
      </div>
      <section className="mt-20">
        <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
          Wall Art Avenue
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
        <p className="container mx-auto text-center font-medium max-w-4xl text-gray-200 mt-5 px-5 ">
          where we specialize in creating stunning,
          <span className="text-secondary"> Wall Art </span>
          images. We print and deliver high-quality, archival-grade prints to
          your door and offer digital image delivery for those who prefer to
          display their artwork digitally.
        </p>
      </section>
    </div>
  );
};

export default Hero;
