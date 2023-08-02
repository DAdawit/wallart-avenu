import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Nunito, Poppins } from "next/font/google";
import { getServices } from "@/sanity/sanity-utils";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Services = async () => {
  const services = await getServices();

  return (
    <>
      <section className="bg-[#0f0c0c] py-10">
        <div className="container mx-auto mt-16">
          <div className="my-5">
            <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
              Services
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
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center  px-5 sm:px-0 gap-5">
            {services.map((service) => (
              <div
                key={service._id}
                className="flex flex-col justify-center items-center"
              >
                <div className="h-20 flex items-center">
                  <Image
                    src={`${service.icon}`}
                    height={1000}
                    width={1000}
                    alt={service.name}
                    className="h-16 w-16 object-cover"
                  />
                </div>
                <div className="flex flex-col items-center mt-3">
                  <h1 className="text-center text-secondary font-medium text-2xl whitespace-nowrap tracking-wider">
                    <span className={poppins.className}>{service.name}</span>
                  </h1>
                  <p className="mt-2 text-center text-gray-50 max-w-xs tracking-wide text-sm font-light">
                    <PortableText value={service.content} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
