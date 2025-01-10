import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Toprated from "./Pages/Toprated";
import Popup from "./components/Popup/Popup"; 
import KidsWear from "./Pages/KidsWear";
import About from "./Pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Electronics from "./Pages/Electronics";

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
            element={<About setOrderPopup={setOrderPopup} />} 
          />
          <Route
            path="/electronics"
            element={<Electronics setOrderPopup={setOrderPopup} />}
          />
          
          
        </Routes>
      </Router>
      
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
