import React from "react";
import { FaStar } from "react-icons/fa";

// Importing product images
import gog1 from "../assets/Goggles/gog1.jpg";
import gog2 from "../assets/Goggles/gog2.jpg";
import gog3 from "../assets/Goggles/gog3.jpg";
import gog4 from "../assets/Goggles/gog4.jpg";
import gog5 from "../assets/Goggles/gog5.jpg";
import gog6 from "../assets/Goggles/gog6.jpg";

  const ProductsData = [
    { id: 1, img: gog1, title: "Goggles", description: "Stylish goggles for a trendy look.", rating: 4 },
    { id: 2, img: gog2, title: "Goggles", description: "Perfect goggles for sunny days.", rating: 4 },
    { id: 3, img: gog3, title: "Goggles", description: "Comfortable and elegant goggles.", rating: 4.3 },
    { id: 4, img: gog4, title: "Goggles", description: "Durable goggles for everyday use.", rating: 5 },
    { id: 5, img: gog5, title: "Goggles", description: "Lightweight goggles with UV protection.", rating: 5 },
    { id: 6, img: gog6, title: "Goggles", description: "Premium goggles with a sleek design.", rating: 4.4 },
  ];


const Goggles = ({ setOrderPopup }) => {
  return (
    <div className="mt-10 top-products">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-m text-yellow-700 mb-3 font-semibold" data-aos="fade-up">
            Dazzling Elegance
          </p>
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Shine Like Never Before!
          </h1>
          <p className="mb-4 text-m text-gray-900" data-aos="fade-up">
            Discover our exquisite collection of jewelry, where timeless beauty meets exceptional craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 dark:text-white hover:bg-black/80 dark:hover:bg-orange-900 hover:text-white relative shadow-xl duration-200 group max-w-[300px]"
            >
              <div className="h-[300px] w-[300px] mx-auto relative overflow-hidden rounded mb-4">
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
    </div>
  );
};

export default Goggles;
