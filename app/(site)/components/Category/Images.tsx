import Image from "next/image";
import React from "react";
import FullImageDialog from "../../common/FullImageDialog";
import { ImageDetail } from "@/types/category";
type Props = {
  images: ImageDetail[];
};
const Images: React.FC<Props> = ({ images }) => {
  return (
    <div className="py-10">
      {images?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mt-5">
          {images.map((image, index) => (
            <div key={index} className="w-full ">
              <div className="relative">
                <Image
                  src={`${image.url}`}
                  height={1000}
                  width={1000}
                  alt="gallery image"
                  className="h-96 w-full object-cover  rounded-xl"
                />
                <div className="absolute bottom-3 left-3 ">
                  <FullImageDialog image={image.url} />
                </div>
                <h4 className="bg-white text-black rounded-full absolute top-5 left-5 text-sm opacity-75 px-2 py-1">
                  {image.size}
                </h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <h1>no images</h1>
        </div>
      )}
    </div>
  );
};

export default Images;
