import React, { useState } from "react";
import Popup from "../components/Popup/Popup";
import { FaStar } from "react-icons/fa";

// Importing product images
import wes1 from "../assets/WesternWear/wes1.jpg";
import wes2 from "../assets/WesternWear/wes2.jpg";
import wes3 from "../assets/WesternWear/wes3.jpg";
import wes4 from "../assets/WesternWear/wes4.jpg";
import wes5 from "../assets/WesternWear/wes5.jpg";
import wes6 from "../assets/WesternWear/wes6.jpg";
import wes7 from "../assets/WesternWear/wes7.jpg";
import wes8 from "../assets/WesternWear/wes8.jpg";
import wes9 from "../assets/WesternWear/wes9.jpg";
import wes10 from "../assets/WesternWear/wes10.jpg";
import wes11 from "../assets/WesternWear/wes11.jpg";
import wes12 from "../assets/WesternWear/wes12.jpg";

// Product data
const ProductsData = [
  { id: 1, img: wes1, title: "Western Dress", description: "Stylish and comfortable western wear.", rating: 4, price: 1499 },
  { id: 2, img: wes2, title: "Western Top", description: "Elegant western top for casual outings.", rating: 4, price: 999 },
  { id: 3, img: wes3, title: "Maxi Dress", description: "Beautiful maxi dress for every occasion.", rating: 4.3, price: 1999 },
  { id: 4, img: wes4, title: "Jumpsuit", description: "Trendy jumpsuit for a stylish look.", rating: 5, price: 2499 },
  { id: 5, img: wes5, title: "Blazer", description: "Classic blazer to elevate your wardrobe.", rating: 5, price: 2999 },
  { id: 6, img: wes6, title: "Skirt", description: "Chic skirt with a modern design.", rating: 4.4, price: 1299 },
  { id: 7, img: wes7, title: "Western Pants", description: "Comfortable and versatile pants.", rating: 4.5, price: 1799 },
  { id: 8, img: wes8, title: "Denim Jacket", description: "Stylish denim jacket for all seasons.", rating: 5, price: 2199 },
  { id: 9, img: wes9, title: "Western Coat", description: "Elegant coat for a sophisticated look.", rating: 4.5, price: 3499 },
  { id: 10, img: wes10, title: "Casual Dress", description: "Perfect for casual outings.", rating: 4.9, price: 1399 },
  { id: 11, img: wes11, title: "Formal Shirt", description: "Smart and professional formal shirt.", rating: 5, price: 1899 },
  { id: 12, img: wes12, title: "Western Shorts", description: "Comfortable and stylish shorts.", rating: 4.8, price: 899 },
];

const WomenWestern = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderNow = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  return (
    <>
      <div className="mt-10 top-products">
        <div className="container">
          <div className="text-center mb-10">
            <p className="text-m text-yellow-700 mb-3 font-semibold" data-aos="fade-up">
              Western Wear Collection
            </p>
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
              Unleash Your Style!
            </h1>
            <p className="mb-4 text-m text-gray-900" data-aos="fade-up">
              Explore our trendy collection of western wear that blends comfort and elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 dark:text-white hover:bg-black/80 dark:hover:bg-orange-900 hover:text-white relative shadow-xl duration-200 group max-w-[300px]"
              >
                <div className="h-[250px] w-[200px] mx-auto relative overflow-hidden rounded mb-4">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-full w-full object-cover transform group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {Array.from({ length: Math.floor(data.rating) }, (_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                    {data.rating % 1 !== 0 && <FaStar className="text-yellow-500 opacity-50" />}
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
        <div className="mt-10"></div>
      </div>
      {orderPopup && <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} product={selectedProduct} />}
    </>
  );
};

export default WomenWestern;
