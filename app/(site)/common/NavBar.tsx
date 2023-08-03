import { getPages } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = async () => {
  const pages = await getPages();

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center py-3 px-5">
      <Link href="/">
        <Image
          src="/logo.png"
          width={1000}
          height={1000}
          alt="logo"
          className="h-14 w-36 object-contain"
        />
      </Link>
      <ul className="flex gap-x-2 items-center">
        {pages.map((page) => (
          <li key={page._id}>
            <Link href={`/${page.slug}`}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
