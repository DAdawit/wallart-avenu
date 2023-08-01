import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-screen relative">
        <Image
          src="/banner3.jpg"
          alt="spector"
          fill
          className="w-screen h-screen object-cover brightness-50"
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
        <div className="absolute top-1 w-full z-30 px-16">
          <div className="flex justify-between gap-x-3">
            <div>
              <Image
                src="/logo.png"
                width={1000}
                height={1000}
                alt="logo"
                className="h-32 w-32 object-contain"
              />
            </div>
            <div className="flex gap-2">
              <Link
                href="/history"
                className="text-white font-bold underline underline-offset-2"
              >
                01. HISTORY
              </Link>
              <Link
                href="/team"
                className="text-gray-800 underline underline-offset-2"
              >
                02. TEAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
