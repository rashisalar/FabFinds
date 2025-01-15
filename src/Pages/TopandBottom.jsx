import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import Popup from "../components/Popup/Popup";
// Importing product images
import Image1 from "../assets/TopandBottom/Image1.jpg"
import Image2 from "../assets/TopandBottom/Image2.jpg"
import Image3 from "../assets/TopandBottom/Image3.jpg"
import Image4 from "../assets/TopandBottom/Image4.jpg"
import Image5 from "../assets/TopandBottom/Image5.jpg"
import Image6 from "../assets/TopandBottom/Image6.jpg"
import Image7 from "../assets/TopandBottom/Image7.jpg"
import Image8 from "../assets/TopandBottom/Image8.jpg"
import Image9 from "../assets/TopandBottom/Image9.jpg"

// Product data
const ProductsData = [
  { 
    id: 1, 
    img: Image1, 
    title: "Black TopandBottom", 
    description: "Trendy and stylish tops for every occasion.", 
    rating: 5, 
    price: 1499 
  },
  { 
    id: 2, 
    img: Image2, 
    title: "Elegant Bottoms", 
    description: "Comfortable and versatile bottoms to complement your wardrobe.", 
    rating: 4, 
    price: 1399 
  },
  { 
    id: 3, 
    img: Image3, 
    title: "Co-Ord Sets", 
    description: "Perfectly matched sets for a complete look.", 
    rating: 5, 
    price: 1999 
  },
  { 
    id: 4, 
    img: Image4, 
    title: "Printed Set", 
    description: "Bright and bold prints for a standout style.", 
    rating: 4, 
    price: 1299 
  },
  { 
    id: 5, 
    img: Image5, 
    title: "Casual Top and Bottoms", 
    description: "Relaxed and comfy styles for everyday wear.", 
    rating: 4, 
    price: 1199 
  },
  { 
    id: 6, 
    img: Image6, 
    title: "Party Wear Sets", 
    description: "Elegant sets designed for special occasions.", 
    rating: 5, 
    price: 2499 
  },
  { 
    id: 7, 
    img: Image7, 
    title: "Floral Sets", 
    description: "Soft, feminine tops with beautiful floral patterns.", 
    rating: 5, 
    price: 1299 
  },
  { 
    id: 8, 
    img: Image8, 
    title: "Wide-Leg Sets", 
    description: "Trendy wide-leg pants for a modern look.", 
    rating: 4, 
    price: 1399 
  },
  { 
    id: 9, 
    img: Image9, 
    title: "Office Wear Sets", 
    description: "Sophisticated sets perfect for workdays.", 
    rating: 5, 
    price: 1999 
  },
];


const TopandBottom = () => {
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
            <p className="text-m text-orange-700 mb-3 font-semibold" data-aos="fade-up">
              Trendsetting styles
            </p>
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
              You better watch out!
            </h1>
            <p className="mb-4 text-m text-gray-900" data-aos="fade-up">
              Explore our carefully curated collection of top-rated products, designed to combine style, comfort, and quality.
            </p>
          </div>
          <div className="mb-5">
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
        </div>
      </div>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} product={selectedProduct} />
    </>
  );
};

export default TopandBottom;
