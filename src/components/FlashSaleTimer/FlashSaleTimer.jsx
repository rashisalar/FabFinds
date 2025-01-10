import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FlashSales = () => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState({});
  
  // Set the sale start and end time
  const saleStart = new Date("2025-01-10T10:00:00Z");
  const saleEnd = new Date("2025-01-10T18:00:00Z");

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      const now = new Date();
      let diff = saleStart - now;

      if (diff < 0) {
        diff = saleEnd - now;
      }

      if (diff < 0) {
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [saleStart, saleEnd]);

  return (
    <div className="w-full flex justify-center items-center py-2">
      <div className="max-w-screen-xxl w-full bg-gradient-to-r from-orange-700 to-indigo-500 shadow-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Countdown Timer (Left) */}
        <div className="w-full md:w-1/2 text-white text-center" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">Flash Sale Countdown</h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col items-center bg-white text-black rounded-lg py-4 px-6 shadow-md">
              <span className="text-4xl font-bold">{timeRemaining.hours || "00"}</span>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center bg-white text-black rounded-lg py-4 px-6 shadow-md">
              <span className="text-4xl font-bold">{timeRemaining.minutes || "00"}</span>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center bg-white text-black rounded-lg py-4 px-6 shadow-md">
              <span className="text-4xl font-bold">{timeRemaining.seconds || "00"}</span>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        </div>

        {/* Sale Headline/Description (Right) */}
        <div data-aos="fade-up" className="w-full md:w-1/2 text-white text-center">
          <h2 data-aos="fade-up"  className="text-3xl font-bold mb-4">Huge Discounts On All Items!</h2>
          <p data-aos="fade-up" className="text-lg mb-4">Grab your favorite products at unbeatable prices during our flash sale. Hurry, the clock is ticking!</p>
          <button onClick={() => navigate('/')} className="bg-gray-700 text-white py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition duration-300">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
