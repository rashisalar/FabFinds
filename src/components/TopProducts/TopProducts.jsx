import React, { useState } from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa6";
import Popup from "../Popup/Popup"; // Assuming the Popup component is reusable

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Perfect for everyday comfort, our casual wear combines style and practicality. Ideal for relaxed outings or weekend get-togethers.",
      price: 1299,
    },
  {
    id: 2,
    img: Img2,
    title: "Printed Wear",
    description:
      "Brighten up your wardrobe with our vibrant printed wear, featuring unique designs that make a bold fashion statement.",
      price: 2299,
    },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "A versatile women's shirt that pairs well with jeans or skirts. Crafted for a sleek look, it's ideal for both casual and semi-formal occasions.",
      price: 3299,
    },
];

const TopProducts = () => {
  const [orderPopup, setOrderPopup] = useState(false); // Manages popup visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // Manages selected product data

  // Handle "Order Now" button click
  const handleOrderNow = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  return (
    <div className="mt-7 top-products">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-m text-orange-700 mb-3 font-semibold" data-aos="fade-up">
            Top Rated Products for you
          </p>
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Best Products
          </h1>
          <p className=" mb-4 text-m text-gray-900" data-aos="fade-up">
            Explore our carefully curated collection of top-rated products,
            designed to combine style, comfort, and quality. From everyday
            essentials to standout pieces, we bring you the best options to
            elevate your wardrobe and enhance your look.
          </p>
        </div>

        {/* Product Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 dark:text-white
                hover:bg-black/80 dark:hover:bg-orange-900 hover:text-white
                relative shadow-xl duration-200 group max-w-[300px]"
            >
              {/* Image Section */}
              <div className="mb-10">
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="max-w-[140px] block mx-auto transform -translate-y-20
                      group-hover:scale-105 duration-300 drop-shadow-md mt-8"
                  />
                </div>
              </div>

              {/* Details Section */}
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
                  onClick={() => handleOrderNow(data)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Component */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} product={selectedProduct} />
    </div>
  );
};

export default TopProducts;
