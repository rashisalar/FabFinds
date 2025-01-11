import React from 'react';
import { FaStar } from "react-icons/fa6"; // Importing FaStar
import Navbar from '../components/Navbar/Navbar';
import FlashSales from '../components/FlashSaleTimer/FlashSaleTimer';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
import home1 from'../assets/HomeAppliances/home1.jpg';
import home2 from'../assets/HomeAppliances/home2.jpg';
import home3 from'../assets/HomeAppliances/home3.jpg';
import home4 from'../assets/HomeAppliances/home4.jpg';
import home5 from'../assets/HomeAppliances/home5.jpg';
import home6 from'../assets/HomeAppliances/home6.jpg';
import home7 from'../assets/HomeAppliances/home7.jpg';
import home8 from'../assets/HomeAppliances/home8.jpg';
import home9 from'../assets/HomeAppliances/home9.jpg';
// Importing product images

import Hero from '../components/Hero/Hero';

const ProductsData = [
    { id: 1, img: home1, title: "Washing Machine", description: "Efficient and powerful washing machine for spotless clothes.", rating: 4 },
    { id: 2, img: home2, title: "Refrigerator", description: "Keep your food fresh with this energy-efficient refrigerator.", rating: 5 },
    { id: 3, img: home3, title: "Microwave Oven", description: "Quick and easy cooking with our high-performance microwave.", rating: 4 },
    { id: 4, img: home4, title: "Blender", description: "Blend smoothies and soups with ease using this versatile blender.", rating: 5 },
    { id: 5, img: home5, title: "Air Conditioner", description: "Stay cool and comfortable with our energy-saving air conditioner.", rating: 4 },
    { id: 6, img: home6, title: "Dishwasher", description: "Save time and effort with this efficient dishwasher for spotless dishes.", rating: 5 },
    { id: 7, img: home7, title: "Electric Kettle", description: "Boil water in minutes with our fast and safe electric kettle.", rating: 4 },
    { id: 8, img: home8, title: "Vacuum Cleaner", description: "Keep your home clean and dust-free with this powerful vacuum cleaner.", rating: 4 },
    { id: 9, img: home9, title: "Coffee Maker", description: "Brew fresh coffee every morning with our sleek and easy-to-use coffee maker.", rating: 5 },
  ];
  
const HomeAppliances = ({ setOrderPopup }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-5 mb-5">
          <Hero/>
        </div>
      </div>
      <div className="mt-10 top-products">
        <div className="container">
          <div className="text-center mb-10">
          <p className="text-m text-orange-700 mb-3 font-semibold" data-aos="fade-up">
            Discover premium picks
           </p>
         <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Home Products
           </h1>
            <p className="mb-4 text-m text-gray-900" data-aos="fade-up">
               Browse our exclusive range of home products that redefine comfort and style for your living space.
            </p>
          </div>
           <div className="mb-5"> <FlashSales /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 dark:text-white hover:bg-black/80 dark:hover:bg-orange-900 hover:text-white relative shadow-xl duration-200 group max-w-[300px]"
              >
                <div className="mb-10">
                  <div className="h-[250px] w-[200px] mx-auto relative overflow-hidden rounded">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="h-full w-full object-cover transform group-hover:scale-105 duration-300"
                    />
                  </div>
                </div>

                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1 mb-2">
                    {[...Array(data.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-700 group-hover:text-white duration-300 text-sm line-clamp-2 dark:text-gray-100">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={setOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Subscribe />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeAppliances;
