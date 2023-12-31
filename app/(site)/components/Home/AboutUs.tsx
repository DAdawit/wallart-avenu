import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="mt-20">
        <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
          Wall Art Avenue
        </h1>

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

export default AboutUs;
