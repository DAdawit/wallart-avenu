"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { CarosoleType } from "@/types/carosole";
interface CarosoleProps {
  carosoles: CarosoleType[];
}
export default class Carosole extends Component<CarosoleProps> {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <>
        <div className="-mt-4 overflow-x-hidden">
          <Slider {...settings}>
            {this.props.carosoles.map((carosole) => (
              <div key={carosole._id} className="">
                <div className="overflow-x-hidden">
                  <div className="h-96 md:h-screen w-screen relative">
                    <Image
                      src={`${carosole.image}`}
                      alt="spector"
                      fill
                      className="w-screen h-96 md:h-screen object-cover brightness-75 pointer-events-none select-none"
                      blurDataURL="/banner2.png"
                    />
                    <div className="absolute top-1/3  z-30 px-16 w-full flex justify-center">
                      <Image
                        src="/logoMain.png"
                        width={1000}
                        height={1000}
                        alt="logo"
                        className="object-contain w-80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
