import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import FlashSales from "../components/FlashSaleTimer/FlashSaleTimer";
import { FaStar } from "react-icons/fa6";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Subscribe from "../components/Subscribe/Subscribe";
import Popup from "../components/Popup/Popup";
// Importing product images
import Image1 from "../assets/kidwear/Image1.jpg";
import Image2 from "../assets/kidwear/Image2.jpg";
import Image3 from "../assets/kidwear/Image3.jpg";
import Image4 from "../assets/kidwear/Image4.jpg";
import Image5 from "../assets/kidwear/Image5.jpg";
import Image6 from "../assets/kidwear/Image6.jpg";
import Image7 from "../assets/kidwear/Image7.jpg";
import Image8 from "../assets/kidwear/Image8.jpg";
import Image9 from "../assets/kidwear/Image9.jpg";
import Image10 from "../assets/kidwear/Image10.jpg";
import Image11 from "../assets/kidwear/Image11.jpg";
import Image12 from "../assets/kidwear/Image12.jpg";

// Product data
const ProductsData = [
  { id: 1, img: Image1, title: "Casual Wear", description: "Comfortable and stylish everyday outfits for kids.", rating: 4, price: 1299 },
  { id: 2, img: Image2, title: "Printed Wear", description: "Vibrant prints for a bold fashion statement.", rating: 5, price: 1499 },
  { id: 3, img: Image3, title: "Shirts", description: "Versatile shirts perfect for casual or semi-formal occasions.", rating: 4, price: 999 },
  { id: 4, img: Image4, title: "Toys", description: "Engaging and fun toys for kids of all ages.", rating: 5, price: 799 },
  { id: 5, img: Image5, title: "Action Toys", description: "Exciting action figures and collectibles.", rating: 4, price: 1299 },
  { id: 6, img: Image6, title: "Educational Toys", description: "Toys that combine fun with learning.", rating: 5, price: 1599 },
  { id: 7, img: Image7, title: "Clothing Sets", description: "Stylish and matching clothing sets for kids.", rating: 4, price: 1799 },
  { id: 8, img: Image8, title: "Winter Wear", description: "Keep your kids warm with our cozy winter collection.", rating: 4, price: 1999 },
  { id: 9, img: Image9, title: "Summer Wear", description: "Breathable and light outfits for hot days.", rating: 5, price: 899 },
  { id: 10, img: Image10, title: "Dresses", description: "Elegant and comfortable dresses for all occasions.", rating: 4, price: 1299 },
  { id: 11, img: Image11, title: "Party Wear", description: "Trendy outfits for special celebrations.", rating: 5, price: 1599 },
  { id: 12, img: Image12, title: "Festive Wear", description: "Traditional yet modern outfits for festive moments.", rating: 4, price: 1999 },
];

const KidsWear = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderNow = (product) => {
    setSelectedProduct(product);
    setOrderPopup(true);
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 mb-5">
        <Hero />
      </div>

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
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} product={selectedProduct} />
    </>
  );
};

export default KidsWear;
