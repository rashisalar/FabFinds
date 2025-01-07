import React from 'react'
import BannerImg from"../../assets/women/women8.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className="min-h-[550px]  flex 
       justify-center items-center py-12 mt-4 mb-4
       sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1
                     sm:grid-cols-2 gap-6
                     items-center">
        {/*image section*/}
        <div data-aos="zoom-in">
            <img src={BannerImg} alt="Medium" 
            className="max-w-[600px] h-[400px] w-full
                      mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover  rounded-lg"
            />
        </div>
        {/*text section*/}
        <div className="flex flex-col justify-center gap-3 sm:pt-0">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
            Winter Sale upto 50% OFF</h1>
            <p data-aos="fade-up" className="text-m text-black mt-4 tracking-wide leading-5">
            Embrace the winter vibes with unbeatable discounts! Refresh your wardrobe with our latest collection and enjoy up to 50% off on premium styles. Don't miss out—shop now and elevate your winter look!
           </p>
           <div className="flex flex-col gap-4">
             <div data-aos="fade-up" className="flex items-center gap-3">
                <GrSecure className="text-4xl h-12 w-12
                                 shadow-sm p-4 rounded-full bg-violet-200
                                 dark:bg-violet-400"/>
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-300 dark:bg-orange-500"/>
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-300 dark:bg-green-500"/>
                <p>Easy Payment Method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-300 dark:bg-yellow-500"/>
                <p>Get Offers</p>
              </div>
           </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Banner
