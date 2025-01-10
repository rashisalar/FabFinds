import React, { useState } from 'react';
import TopProducts from '../components/TopProducts/TopProducts';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Img4 from "../assets/Toprated/image1.png";
import Img5 from "../assets/Toprated/image2.png";
import Img6 from "../assets/Toprated/image3.png";
import Img7 from "../assets/Toprated/image4.png";
import Img8 from "../assets/Toprated/image5.png";
import Img9 from "../assets/Toprated/image6.png";
import { FaStar } from "react-icons/fa"; // Corrected import
import FlashSales from '../components/FlashSaleTimer/FlashSaleTimer';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

const ProductsData = [
  {
    id: 1,
    img: Img4,
    title: "Casual Wear",
    description:
      "Perfect for everyday comfort, our casual wear combines style and practicality. Ideal for relaxed outings or weekend get-togethers.",
  },
  {
    id: 2,
    img: Img5,
    title: "Printed Wear",
    description:
      "Brighten up your wardrobe with our vibrant printed wear, featuring unique designs that make a bold fashion statement.",
  },
  {
    id: 3,
    img: Img6,
    title: "Women Shirt",
    description:
      "A versatile women's shirt that pairs well with jeans or skirts. Crafted for a sleek look, it's ideal for both casual and semi-formal occasions.",
  },
  {
    id: 4,
    img: Img7,
    title: "Kids Shirt",
    description:
      "A versatile women's shirt that pairs well with jeans or skirts. Crafted for a sleek look, it's ideal for both casual and semi-formal occasions.",
  },
  {
    id: 5,
    img: Img8,
    title: "Tailored fit Shirt",
    description:
      "A versatile women's shirt that pairs well with jeans or skirts. Crafted for a sleek look, it's ideal for both casual and semi-formal occasions.",
  },
  {
    id: 6,
    img: Img9,
    title: "Polo Shirts",
    description:
      "A versatile women's shirt that pairs well with jeans or skirts. Crafted for a sleek look, it's ideal for both casual and semi-formal occasions.",
  },
];

const Toprated = ({ setOrderPopup }) => { // Accept setOrderPopup as a prop
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-5 mb-5">
        <Hero/>
        </div>
        <TopProducts />
        
      </div>
      <div className="mt-10 top-products">
      <div className="mt-5 mb-5">
        <FlashSales/>
        </div>
        <div className="container">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 dark:text-white
                  hover:bg-black/80 dark:hover:bg-orange-900 hover:text-white
                  relative shadow-xl duration-200 group max-w-[300px]"
              >
                <div className="mb-10">
                  <div className="h-[100px]">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="max-w-[140px] block mx-auto transform -translate-y-20
                        group-hover:scale-105 duration-300 drop-shadow-md mt-20"
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1 mb-2">
                    {[...Array(4)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p
                    className="text-gray-700 group-hover:text-white duration-300
                      text-sm line-clamp-2 dark:text-gray-100"
                  >
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4
                      rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => setOrderPopup(true)} // Show popup
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
        <Subscribe/>
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default Toprated;

