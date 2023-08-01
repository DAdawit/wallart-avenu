import { getPages, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = async () => {
  const pages = await getPages();

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center py-3 px-5">
      <h1>sanity</h1>
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
