"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 py-3">
        <section className="container mx-auto px-5">
          <div>
            <div className="flex justify-start">
              <Image
                src="/logoOnly.png"
                height={1000}
                width={1000}
                alt="logo image"
                className="h-16 w-16 object-contain"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch mt-5">
            <div className="text-gray-200 flex flex-col gap-y-1">
              <h1 className="text-white font-bold text-2xl">USEFUL LINKS</h1>
              <Link
                href="#"
                className="text-sm  font-sans text-white hover:underline underline-offset-2 mt-2"
              >
                ABOUT US
              </Link>
              <Link
                href="#"
                className="text-sm font-sans text-white hover:underline underline-offset-2 "
              >
                OUR SERVICES
              </Link>
              <Link
                href="#"
                className="text-sm  font-sans text-white hover:underline underline-offset-2 "
              >
                INFORMATION
              </Link>
              <Link
                href="#"
                className="text-sm font-sans text-white hover:underline underline-offset-2 "
              >
                PRIVACY POLICY
              </Link>
            </div>
            <div className="text-gray-200 flex flex-col gap-y-1">
              <h1 className="text-white font-bold text-2xl">OUR TERMS</h1>
              <Link
                href="#"
                className="text-sm  font-sans text-white hover:underline underline-offset-2 mt-2"
              >
                SUPPORT
              </Link>
              <Link
                href="#"
                className="text-sm font-sans text-white hover:underline underline-offset-2 "
              >
                CONTACTS
              </Link>
              <Link
                href="#"
                className="text-sm  font-sans text-white hover:underline underline-offset-2 "
              >
                TYPOGRAPHY
              </Link>
              <Link
                href="#"
                className="text-sm font-sans text-white hover:underline underline-offset-2 "
              >
                FAQ
              </Link>
            </div>
            <div className="text-gray-200 flex flex-col gap-y-1">
              <h1 className="text-white font-bold text-2xl">SHOWROOM</h1>
              <h1 className="text-sm  font-sans text-white mt-2">
                Eth, Auto, Addis Ababa. 665087
              </h1>
              <h1 className="text-sm font-sans text-white">
                Phone.: 0936207512/0942110937
              </h1>
              <h1 className="text-sm  font-sans text-white">
                E-mail.: dawitccnt@gmail.com
              </h1>
              <h1 className="text-sm font-sans text-white">© 2023 Auto LTD</h1>
            </div>
          </div>
        </section>
        <div className="container mx-auto w-full">
          <div className=" flex justify-end gap-3 w-full">
            <Link href="#">
              <FacebookIcon className=" text-white" />
            </Link>
            <Link href="#">
              <InstagramIcon className=" text-white" />
            </Link>
            <Link href="#">
              <TelegramIcon className=" text-white" />
            </Link>
            <Link href="#">
              <PhoneIcon className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
