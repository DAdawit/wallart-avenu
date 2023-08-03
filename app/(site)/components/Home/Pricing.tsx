import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import CheckIcon from "@mui/icons-material/Check";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});
// 0941326088
const Pricing = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-16 sm:px-0 pb-10">
          <div className="pt-10">
            <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
              Pricing
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center pt-16">
            <div className="grid w-full rounded-2xl">
              <div className="bg-gray-900 py-5 rounded-t-xl">
                <div className="h-28 grid justify-items-center items-center justify-center ">
                  <h2 className="text-3xl text-secondary">Birr 500</h2>
                  <h4 className="text-center text-lg font-medium font-sans capitalize text-secondary -mt-10">
                    Digital image
                  </h4>
                </div>
              </div>
              <div className="bg-gray-200">
                <div className="py-10 px-5 h-20">
                  <p className="font-sans text-md text-gray-700">
                    Digital version of the artwork without the physical print
                  </p>
                </div>
                <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-secondary brightness-105" />
                    image size : any size
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-secondary brightness-105" />
                    Resolution : UHD
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-secondary brightness-105" />
                    File format : png/jpg
                  </li>
                </ul>
              </div>
              <div className="flex justify-center py-3 bg-gray-900 align-end">
                <button className="font-medium  text-white capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
            <div className="grid w-full bg-gray-200 rounded-3xl lg:-translate-y-10 lg:translate-x-2">
              <div className="bg-secondary py-5 rounded-t-xl">
                <div className="h-28 grid justify-items-center items-center justify-center ">
                  <h2 className="text-3xl text-white flex items-center gap-3">
                    <span>Birr 3000</span>
                    <span className="animate-pulse">
                      <ArrowUpwardIcon />
                    </span>
                  </h2>
                  <h4 className="text-center text-lg font-medium font-sans capitalize text-white -mt-10">
                    Pre-designed artwork
                  </h4>
                </div>
              </div>
              <hr />
              <div className="py-10 px-5 h-20">
                <p className="font-sans text-md text-gray-700">
                  Ready-made artwork from our collection
                </p>
              </div>
              <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Image size : 120/90
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  material : MDF
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Quantity : 1
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Printing : printing with frame
                </li>
              </ul>
              <div className="flex justify-center py-3 bg-secondary align-end">
                <button className="font-medium  text-white capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
            <div className="grid w-full bg-gray-200 rounded-xl lg:-translate-y-10 lg:-translate-x-2">
              <div className="bg-secondary py-5 rounded-t-xl">
                <div className="h-28 grid justify-items-center items-center justify-center ">
                  <h2 className="text-3xl text-white flex items-center gap-3">
                    <span>Birr 6000</span>
                    <span className="animate-pulse">
                      <ArrowUpwardIcon />
                    </span>
                  </h2>
                  <h4 className="text-center text-lg font-medium font-sans -mt-10 capitalize text-white">
                    Custom design
                  </h4>
                </div>
              </div>
              <hr />
              <div className="py-10 px-5 h-20">
                <p className="font-sans text-md text-gray-700">
                  One-of-a-kind, customized wall art design
                </p>
              </div>
              <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Size of the artwork : 120/90
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Complexity of the design : ....{" "}
                </li>
                <li>
                  <CheckIcon className="text-secondary brightness-105" /> {"  "}
                  Number of revisions : 10
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="text-secondary brightness-105" />
                  Printing : printing with frame
                </li>
              </ul>
              <div className="flex justify-center py-3 bg-secondary  align-end">
                <button className="font-medium  text-white capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
            <div className="grid w-full rounded-xl">
              <div className="bg-gray-900 py-5 rounded-t-2xl">
                <div className="h-28 flex items-center justify-center ">
                  <h2 className="flex items-center text-3xl text-secondary">
                    <span> Birr 8000</span>
                    <span>
                      <ArrowUpwardIcon />
                    </span>
                  </h2>
                </div>
                <h4 className="text-center text-lg font-medium font-sans -mt-10 capitalize text-secondary">
                  Custom design with copyright ownership
                </h4>
              </div>
              <div className="bg-gray-200">
                <div className="py-10 px-5 h-20">
                  <p className="font-sans text-md text-gray-700">
                    Modified version of an existing design
                  </p>
                </div>
                <ul className="font-sans mt-8 capitalize mb-5 px-5 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-secondary brightness-105" />
                    Level of modification : 25-50%
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-secondary brightness-105" />
                    Size of the artwork : 120/90
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-secondary brightness-105" />
                    Number of revisions : 5
                  </li>
                </ul>
              </div>
              <div className="flex justify-center py-3 bg-gray-900 align-end">
                <button className="font-medium  text-white capitalize ">
                  see all feauters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
