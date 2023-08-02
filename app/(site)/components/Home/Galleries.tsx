import Link from "next/link";
import Image from "next/image";
import { getGallery } from "@/sanity/sanity-utils";
import FullImageDialog from "../../common/FullImageDialog";

const Galleries = async () => {
  const galleries = await getGallery();
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
            <section id="paintings">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mt-10">
                {galleries.map((gallery) => (
                  <div key={gallery._id} className="w-full ">
                    <div className="relative">
                      <Image
                        src={`${gallery.coverImage}`}
                        height={1000}
                        width={1000}
                        alt="gallery image"
                        className="h-96 w-full object-cover  rounded-xl"
                      />
                      <div className="absolute bottom-3 left-3 ">
                        <FullImageDialog image={gallery.coverImage} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="flex justify-center my-10">
            <Link
              href="#"
              className="bg-secondary text-white text-lg font-medium px-3 py-2 rounded-lg flex justify-center items-center gap-4"
            >
              {/* <span className={poppins.className}>view our Gallery</span> */}
              {/* <CollectionsIcon /> */}
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Galleries;
