import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6"; // Importing FaStar
import Navbar from '../components/Navbar/Navbar';
import FlashSales from '../components/FlashSaleTimer/FlashSaleTimer';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';
import HeroElectronics from './HeroElectronics';

// Importing product images
import elec1 from '../assets/Electronics/elec1.png';
import elec2 from '../assets/Electronics/elec2.png';
import elec3 from '../assets/Electronics/elec3.png';
import elec4 from '../assets/Electronics/elec4.png';
import elec5 from '../assets/Electronics/elec5.png';
import elec6 from '../assets/Electronics/elec6.png';
import elec7 from '../assets/Electronics/elec7.png';
import elec8 from '../assets/Electronics/elec8.png';
import elec9 from '../assets/Electronics/elec9.png';
import elec10 from '../assets/Electronics/elec10.png';
import elec11 from '../assets/Electronics/elec11.png';
import elec12 from '../assets/Electronics/elec12.png';

const ProductsData = [
  { id: 1, img: elec1, title: "Smartphones", description: "Latest smartphones with cutting-edge features.", rating: 5, price: 49999 },
  { id: 2, img: elec2, title: "Smartphones", description: "High-quality smartphone experience for everyday use.", rating: 4, price: 29999 },
  { id: 3, img: elec3, title: "Smartphones", description: "Premium smartphones with stunning displays.", rating: 5, price: 39999 },
  { id: 4, img: elec4, title: "Headphones", description: "Experience immersive sound with our top headphones.", rating: 4, price: 8999 },
  { id: 5, img: elec5, title: "Headphones", description: "Noise-canceling headphones for ultimate focus.", rating: 5, price: 12999 },
  { id: 6, img: elec6, title: "Headphones", description: "High-fidelity sound for music lovers.", rating: 4, price: 7999 },
  { id: 7, img: elec7, title: "Laptop", description: "High-performance laptops for work and gaming.", rating: 4, price: 79999 },
  { id: 8, img: elec8, title: "Laptop", description: "Lightweight laptops with long-lasting battery life.", rating: 5, price: 99999 },
  { id: 9, img: elec9, title: "Laptop", description: "Sleek designs and powerful processors.", rating: 4, price: 69999 },
  { id: 10, img: elec10, title: "Smart LED TV", description: "4K Ultra HD TVs for an unparalleled experience.", rating: 5, price: 49999 },
  { id: 11, img: elec11, title: "Smart LED TV", description: "Smart TVs with integrated apps and voice controls.", rating: 4, price: 39999 },
  { id: 12, img: elec12, title: "Smart LED TV", description: "Crystal-clear visuals for home entertainment.", rating: 5, price: 59999 },
];

const Electronics = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderNow = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  const closeOrderPopup = () => {
    setOrderPopup(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 mb-5">
        <HeroElectronics />
      </div>
      <div className="mt-10 top-products">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-m text-orange-700 mb-3 font-semibold" data-aos="fade-up">
              Top Tech Trends
            </p>
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
              Your Next Upgrade Awaits
            </h1>
            <p className="mb-4 text-m text-gray-900" data-aos="fade-up">
              Discover the best in electronics with cutting-edge technology and unmatched performance.
            </p>
          </div>
          <div className="mb-5">
            <FlashSales />
          </div>
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
                  <p className="text-gray-800 font-semibold mt-2">₹{data.price}</p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleOrderNow(data)}
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

      {/* Order Popup */}
      {orderPopup && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 w-[90%] max-w-[500px] text-center">
            <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
            <p className="mb-4">
              You are ordering: <span className="font-semibold">{selectedProduct.title}</span>
            </p>
            <p className="text-sm text-gray-600 mb-4">{selectedProduct.description}</p>
            <p className="font-semibold text-gray-800 mb-4">Price: ₹{selectedProduct.price}</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => alert('Order placed successfully!')}
              >
                Confirm Order
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={closeOrderPopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Electronics;
