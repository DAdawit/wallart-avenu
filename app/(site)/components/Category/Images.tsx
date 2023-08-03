import Image from "next/image";
import React from "react";
import FullImageDialog from "../../common/FullImageDialog";
type Props = {
  images: string[];
};
const Images: React.FC<Props> = ({ images }) => {
  return (
    <div className="py-10">
      {images?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mt-5">
          {images.map((image) => (
            <div key={image} className="w-full ">
              <div className="relative">
                <Image
                  src={`${image}`}
                  height={1000}
                  width={1000}
                  alt="gallery image"
                  className="h-96 w-full object-cover  rounded-xl"
                />
                <div className="absolute bottom-3 left-3 ">
                  <FullImageDialog image={image} />
                </div>
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
