import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Toprated from "./Pages/Toprated";
import KidsWear from "./Pages/KidsWear";
import About from "./Pages/About";
import Electronics from "./Pages/Electronics";
import HomeAppliances from "./Pages/HomeAppliances";
import WomenWear from "./Pages/WomenWear";
import Cart from "./components/Popup/Cart";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Content/ContentUs";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

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
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Homepage setOrderPopup={setOrderPopup} />}
          />
          <Route
            path="/top-rated"
            element={<Toprated setOrderPopup={setOrderPopup} />}
          />
          <Route
            path="/kid-wear"
            element={<KidsWear setOrderPopup={setOrderPopup} />}
          />
          <Route
            path="/about-us"
            element={<About />} 
          />
          <Route
            path="/electronics"
            element={<Electronics setOrderPopup={setOrderPopup} />}
          />
          <Route
            path="/homeAppliances"
            element={<HomeAppliances setOrderPopup={setOrderPopup} />}
          />
          <Route
            path="/women-wear"
            element={<WomenWear setOrderPopup={setOrderPopup} />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
           <Route
            path="/contact-us"
            element={<Contact />} 
          />
        </Routes>
        {/* Render Popup globally */}
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </Router>
    </div>
  );
};

export default App;
