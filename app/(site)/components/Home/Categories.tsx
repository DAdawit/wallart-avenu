"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CategoryType } from "@/types/category";
import Link from "next/link";
interface CategoriesProps {
  categories: CategoryType[];
}
export default class Categories extends Component<CategoriesProps> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <section className="mt-24">
          <div className="my-5">
            <h1 className="text-center text-4xl sm:text-6xl text-white font-black capitalize tracking-wider">
              Categories
            </h1>
            <div className="flex justify-center py-3">
              <Image
                src="/logoOnly.png"
                height={1000}
                width={1000}
                alt="logo image"
                className="h-16 w-16 object-contain self-center text-orange-800"
              />
            </div>
          </div>
          {/* <h1 className="text-center my-5 text-xl font-bold">Categories</h1> */}

          <div className=" px-6 flex justify-center ">
            <div className="container mx-auto px-5 sm:px-0 ">
              <Slider {...settings}>
                {this.props.categories.map((category, index) => (
                  <div key={index} className="h-56 w-full px-3 ">
                    <Link href={`/category/${category.slug}`}>
                      <Image
                        src={`${category.coverImage}`}
                        height={1000}
                        width={1000}
                        alt="breakfast"
                        className="w-full h-44 sm:h-64  object-cover rounded-xl"
                      />
                    </Link>
                    <h1 className="text- text-center text-white">
                      {category.name}
                    </h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}
