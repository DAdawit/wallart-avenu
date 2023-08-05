"use client";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import emailjs from "@emailjs/browser";
import { notify } from "../../ToastMesssage/toast";
import { useState, useRef, FormEvent } from "react";
import { Spinner } from "../../icons/Spinner";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  // Specify the type for the ref
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_eo7q76b",
          "template_9k88sv7",
          form.current,
          "v1VsnnEVI9sHTzHjv"
        )
        .then(
          (result) => {
            notify("your email has been sent successfully", "success");
            setLoading(false);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <div className=" container mx-auto px-5 sm:px-0 bg-black py-10 mt-10 pb-10">
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
          <form className="grid gap-y-3" ref={form} onSubmit={sendEmail}>
            <input
              required
              type="text"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Your Name"
              name="name"
            />
            <input
              required
              type="email"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Your Email"
              name="email"
            />
            <input
              required
              type="number"
              className="h-10 outline-none font-sans text-lg px-3"
              placeholder="Phone Number"
              name="phoneNumber"
            />
            <textarea
              required
              name="message"
              id=""
              cols={25}
              rows={8}
              className="outline-none  font-sans text-lg px-3"
              placeholder="Special Request"
            ></textarea>
            <button className="flex items-center justify-center bg-secondary font-medium text-white mt-3 px-5 py-4  transition-all font-sans tracking-wider">
              <span>Send your message</span>
              <span>{loading ? <Spinner /> : null}</span>
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
