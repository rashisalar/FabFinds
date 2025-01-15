import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FlashSales = () => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState({});
  const saleDuration = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

  useEffect(() => {
    AOS.init();

    const calculateNextSaleTimes = () => {
      const now = new Date();
      const saleStart = new Date();
      saleStart.setHours(10, 0, 0, 0); // Sale starts at 10:00 AM

      if (now > saleStart) {
        saleStart.setDate(saleStart.getDate() + 1); // Move to the next day if current time is past 10:00 AM
      }

      const saleEnd = new Date(saleStart.getTime() + saleDuration);

      return { saleStart, saleEnd };
    };

    let { saleStart, saleEnd } = calculateNextSaleTimes();

    const interval = setInterval(() => {
      const now = new Date();
      let diff = saleEnd - now;

      if (diff <= 0) {
        // Restart the sale
        ({ saleStart, saleEnd } = calculateNextSaleTimes());
        diff = saleEnd - now;
      }

      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeRemaining({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-3xl font-bold mb-4">Huge Discounts On All Items!</h2>
          <p className="text-lg mb-4">Grab your favorite products at unbeatable prices during our flash sale. Hurry, the clock is ticking!</p>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-700 text-white py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
