import React from 'react';
import Img1 from "../../assets/women/Women.png";
import Img2 from "../../assets/women/Women2.jpg"; 
import Img3 from "../../assets/women/Women3.jpg"; 
import Img4 from "../../assets/women/Women4.jpg";
import Img5 from"../../assets/women/Women5.jpg";
import { FaStar } from "react-icons/fa6";


const ProductsData=[
        {
            id:1,
            img:Img1,
            title:"Women Ethnic",
            rating:5.0,
            color:"white",
            aoseDelay:"0",
        },
        {
            id:2,
            img:Img2,
            title:"Women western",
            rating:4.5,
            color:"Red",
            aoseDelay:"200",
        },
        {
            id:3,
            img:Img3,
            title:"Goggles",
            rating:4.7,
            color:"brown",
            aoseDelay:"400",
        },
        {
            id:4,
            img:Img4,
            title:"Printed T-Shirt",
            rating:4.4,
            color:"Yellow",
            aoseDelay:"600",
        },
        {
            id:5,
            img:Img5,
            title:"Fashion T-Shirt",
            rating:4.5,
            color:"Pink",
            aoseDelay:"800",
        },
];


const Products = () => {
  return (
    <div className="mt-10 mb-12">
      <div className="container">
        {/* Headersection */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-m  text-orange-700 mb-3">Top Selling Products for you</p>
            <h1 data-aos="fade-up" className="text-4xl font-bold mb-4">Products</h1>
            <p  data-aos="fade-up" className="text-s text-gray-900"> Discover a selection of premium products that cater to your style and needs.each item is crafted to bring a touch of sophistication to your wardrobe.</p>
        </div>
        {/* bodysection */}
        <div>
            <div
            className=" grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-0">
           {/*cardsection*/}
           {
               ProductsData.map((data)=>(
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aoseDelay}
                key={data.id}
                className="space-y-3">
                    <img
                  src={data.img}
                  alt={`Image of ${data.title}`}
                  className="h-[220px] w-[150px] object-cover rounded-md mb-4"
                />
                <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400"/> 
                        <span>{data.rating}</span>
                    </div>
                </div>
                </div>
               ))}
            </div>
            <div>
             <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full hover:scale-105
                                    duration-300 drop-shadow-[-9px_9px_10px_rgba(0,0,0,0.5)] font-semibold"
              > View All Button</button>
             </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
