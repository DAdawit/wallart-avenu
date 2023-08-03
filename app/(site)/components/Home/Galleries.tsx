"use client";
import Link from "next/link";
import Image from "next/image";
import { getGallery } from "@/sanity/sanity-utils";
import FullImageDialog from "../../common/FullImageDialog";
import { GalleryType } from "@/types/gallery";
import Images from "../../common/Images";
interface Props {
  galleries: GalleryType[];
}
const Galleries: React.FC<Props> = ({ galleries }) => {
  // const galleries = await getGallery();
  return (
    <>
      <section className="bg-black  rounded-t-xl">
        <section className="container mx-auto px-5 sm:px-0 py-16 ">
          <div>
            <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
              Gallery
            </h1>

            <div className="flex justify-center">
              <Image
                src="/logoOnly.png"
                height={1000}
                width={1000}
                alt="logo image"
                className="h-14 w-14 object-contain self-center text-orange-800 my-2"
              />
            </div>
            <section>
              <Images images={galleries} />
            </section>
          </div>
          <div className="flex justify-center my-10">
            <Link
              href="/allImages"
              className="bg-secondary text-white  font-medium px-10 py-2 rounded-lg flex justify-center items-center gap-4"
            >
              view all
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Galleries;
