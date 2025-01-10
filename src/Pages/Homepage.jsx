import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';
import Subscribe from '../components/Subscribe/Subscribe';
import FlashSale from '../components/FlashSaleTimer/FlashSaleTimer';
import CategoriesSection from '../components/CategoriesSection/CategoriesSection';
import Testimonial from '../components/Testimonials/Testimonial';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';  // Make sure to import Login component

const Homepage = ({ setOrderPopup }) => { 
  const [showLogin, setShowLogin] = useState(false);
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} setOrderPopup={setOrderPopup} />
      <Hero setOrderPopup={setOrderPopup} />
      <Products />
      <FlashSale />
      <TopProducts setOrderPopup={setOrderPopup} />
      <Banner />
      <CategoriesSection />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
