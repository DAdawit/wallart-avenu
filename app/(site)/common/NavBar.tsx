import { getPages } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavDrawer from "./NavDrawer";

const NavBar = async () => {
  const pages = await getPages();

  return (
    <header className="bg-[#111827] text-white flex justify-between items-center py-3 px-10">
      <Link href="/">
        <Image
          src="/logo.png"
          width={1000}
          height={1000}
          alt="logo"
          className="h-14 w-36 object-contain"
        />
      </Link>
      <div className="flex items-center gap-x-3">
        <ul className="hidden md:flex gap-x-2 items-center ">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="#about">ABOUT</Link>
          </li>
          <li>
            <Link href="#services">SERVICES</Link>
          </li>
          <li>
            <Link href="#pricing">PRICING</Link>
          </li>
          <li>
            <Link href="#contactus">CONTACT US</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <NavDrawer />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
