
import React from 'react';
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all  Wear",
        description:
            "Upgrade your wardrobe with our latest collection! Enjoy up to 50% off on stylish and premium  wear. From casual tees to formal attire, find everything you need at unbeatable prices. Don’t miss out—shop now and elevate your style!",
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 50% off on all Men's Wear",
        description:
            "Exclusive deals on men's fashion! Grab up to 50% off on trendy outfits, including shirts, trousers, jackets, and more. Refresh your wardrobe with premium styles at pocket-friendly prices. Hurry, offer valid for a limited time!",
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 70% off on all Men's Wear",
        description:
            "Mega Sale Alert! Get up to 70% off on all men's wear. From casual to formal styles, grab your favorite outfits at unbeatable prices. Don’t miss this chance to upgrade your look—shop now before it’s gone!",
    },
];

const Hero = ({ setOrderPopup}) => {
    var settings={
        dots:false,
        arrow:false,
        Infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    };
    return (
       <div className="relative overflow-hidden min-h-[400px]
       sm:min-h-[450px] bg-gray-100 flex justify-center
       items-center dark:bg-gray-950 dark:text-white
       duration-200 ">
         
        <div className="h-[500px] w-[500px] bg-gradient-to-r from-orange-400 to-pink-300
        absolute -top-1/2  rounded-3xl rotate-45
        -z-9 "></div>

        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {ImageList.map((data)=>(
                  <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                   <div className="flex flex-col justify-center
                   gap-4 pt-12 sm:pt-0 text-center sm:text-left
                   order-2 sm:order-1 relative z-10"
                   
                   >
                       <h1 
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          data-aos-once="true"
                          className="text-5xl sm:text-4xl
                          lg:text-6xl font-bold">
                           {data.title}
                       </h1>
                       <p 
                           data-aos="zoom-out"
                           data-aos-duration="500"
                           data-aos-once="true"
                          className="text-m">
                           {data.description}
                       </p>
                       <div
                            data-aos="zoom-out"
                            data-aos-duration="500"
                            data-aos-once="true">
                                
                           <button className="bg-gradient-to-r
                           from-primary to-secondary hover:scale-105 
                            duration-200 text-white py-2 px-4 
                            rounded-full"
                            onClick={ setOrderPopup}
                            >
                               Order Now
                           </button>
                       </div>
                   </div>
                   
                   <div className="order-1 sm:order-2">
                       <div
                         data-aos="zoom-in"
                         data-aos-once="true"
                         className="relative z-10">
                           <img src={data.img} alt="" 
                           className="w-[300px] h-[300px] sm:h-
                           [450px] sm:w-[450px] sm:scale-105
                           lg:scale-120 object-contain mx-auto"
                           />
                       </div>
                   </div>
                   </div> 
               </div>
                ))}
                
                </Slider>
        </div>
       </div>
    );
};

export default Hero;