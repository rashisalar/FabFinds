import React from 'react';
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from"../../assets/shirt/shirt3.png";
import { FaStar } from 'react-icons/fa6';
// import {Fastar} from "react-icons/fa";

const ProductsData=[
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
            "Perfect for everyday comfort, our casual wear combines style and practicality. Ideal for relaxed outings or weekend get-togethers.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Wear",
        description:
            "Brighten up your wardrobe with our vibrant printed wear, featuring unique designs that make a bold fashion statement.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women Shirt",
        description:
            "A versatile women's shirt that pairs well with jeans or skirts. Crafted for a sleek look, it's ideal for both casual and semi-formal occasions.",
    },
];

const TopProducts = () => {
  return (
    <div className>
      <div className="container">
       {/*header*/}
       <div className="text-center mb-20 ">
            <p data-aos="fade-up" className="text-m text-orange-700 mb-3">
                Top Rated Products for you
                </p>
            <h1 data-aos="fade-up" className="text-4xl font-bold mb-4">
                Best Products
                </h1>
            <p data-aos="fade-up" className="text-m text-gray-900">
            Explore our carefully curated collection of top-rated products, designed to combine style, comfort, and quality. From everyday essentials to standout pieces, we bring you the best options to elevate your wardrobe and enhance your look. </p>
        </div>
       {/*body*/}
       <div
       className="grid grid-cols-1 sm:grid-cols-2
                  md:grid-cols-3 gap-10 md:gap-5 place-items-center"
       >
        { ProductsData.map((data)=>(
                <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 dark:text-white
                           hover:bg-black/80 dark:hover:bg-orange-900
                           hover:text-white relative shadow-xl
                            duration-200 group max-w[300px] "
 >
                    {/*img section*/}
                    <div className="mb-10"></div>
                    <div className="h-[100px]">
                        <img src={data.img} alt="" 
                        className="max-w-[140px] block mx-auto
                                   transform -translate-y-20
                                   group-hover:scale-105 duration-300
                                   drop-shadow-md"
                        />
                    </div>
                    {/*details section*/ }
                    <div className="p-4 text-center">
                          <div className="w-full flex items-center justify-center gap-1">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            </div> 
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p 
                            className=" text-gray-700 group-hover:text-white duration-300
                                         text-s line-clamp-2  dark:text-gray-100"
                            >{data.description}</p>
                            <button 
                            className="bg-primary hover:scale-105
                                    duration-300 text-white py-1 px-4
                                    rounded-full mt-4 group-hover:bg-white
                                    group-hover:text-primary"
                                    //  onClick={handleOrderPopup}
                            >
                                Order Now
                            </button>
                    </div>
                </div>
            ))}
       </div>
      </div>
    </div>
  )
}

export default TopProducts
