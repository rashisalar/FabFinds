import React, { useState } from "react";
import Image1 from "../assets/heroWomenwear/women.png";
import Image2 from "../assets/heroWomenwear/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on Women Wear",
    description:
      "Upgrade your wardrobe with our latest collection! Enjoy up to 50% off on stylish and premium wear. From casual tees to formal attire, find everything you need at unbeatable prices. Don’t miss out—shop now and elevate your style!",
  },
  {
    id: 2,
    img: Image2,
    title: "Grab up to 60% off on trendy outfits",
    description:
      "Exclusive deals on Women's fashion! including shirts, trousers, jackets, and more. Refresh your wardrobe with premium styles at pocket-friendly prices. Hurry, offer valid for a limited time!",
  },
];

const HeroWomenwear = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[400px]
       sm:min-h-[450px] bg-gray-100 flex justify-center
       items-center dark:bg-gray-950 dark:text-white
       duration-200"
    >
      <div
        className="h-[500px] w-[500px] bg-gradient-to-r from-orange-400 to-pink-300
        absolute -top-1/2 rounded-3xl rotate-45 -z-9"
      ></div>

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div
                  className="flex flex-col justify-center
                   gap-4 pt-12 sm:pt-0 text-center sm:text-left
                   order-2 sm:order-1 relative z-10"
                >
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-4xl
                          lg:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-m"
                  >
                    {data.description}
                  </p>
                  
                  <div
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                  </div>
                </div>

                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-
                           [450px] sm:w-[450px] sm:scale-105
                           lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroWomenwear;
