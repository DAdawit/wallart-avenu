import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const ContactUs = () => {
  return (
    <div className=" container mx-auto px-5 sm:px-0 bg-black py-10 mt-10">
      <h1 className="text-center text-6xl text-white font-black capitalize mt-10">
        <span className={`text-[#DB9D47] ${poppins.className}`}>
          Contact Us
        </span>
      </h1>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-10 mt-8 gap-8 mb-10">
        <div>
          <h1 className="text-center font-sans text-4xl text-gray-100 font-bold tracking-wider">
            Message us
          </h1>
          <p className="text-center font-mono text-lg text-gray-200 tracking-wide mt-5 px-5">
            Have a question about the our service? We&apos;re here to help,
            contact us today
          </p>
          <form className="grid gap-y-3">
            <input
              type="text"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Your Email"
            />
            <input
              type="number"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Phone Number"
            />
            <textarea
              name=""
              id=""
              cols={25}
              rows={8}
              className="outline-none  font-sans text-lg px-3"
              placeholder="Special Request"
            ></textarea>
            <button className="bg-secondary font-medium text-white mt-3 px-5 py-4  transition-all font-sans tracking-wider">
              Send your message
            </button>
          </form>
        </div>
        <div>
          <Image
            src="/categories/category-2.png"
            alt="spector"
            width={2000}
            height={2000}
            className="text-center h-80 md:h-[93vh] w-full object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
