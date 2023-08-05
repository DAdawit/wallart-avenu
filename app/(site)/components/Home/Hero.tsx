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
    </div>
  );
};

export default Hero;
