import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about-us" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
  { id: 4, name: "Kids Wear", link: "/kid-wear" },
  { id: 5, name: "Women Wear", link: "/women-wear" },
  { id: 6, name: "Electronics", link: "/electronics" },
  { id: 7, name: "HomeAppliances", link: "/home" },
];

const dropdownLinks = [
  { id: 1, name: "Kids Wear", link: "/kid-wear" },
  { id: 2, name: "Electronics", link: "/electronics" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();  // Use navigate to redirect

  // Function to redirect to /cart when the order button is clicked
  const handleOrderNowClick = () => {
    navigate("/cart");  // Redirect to /cart page
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-200 to-pink-200 py-1.5">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              FabFinds
            </Link>
          </div>

          {/* Search, Cart, Dark Mode */}
          <div className="flex items-center gap-5">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search"
                className="w-[200px] sm:w-[300px] group-hover:w-[350px] transition-all 
                  duration-300 rounded-full border border-gray-300 px-4 py-2
                  focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderNowClick}  // Trigger redirect on click
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
                text-white py-1 px-4 rounded-full flex items-center gap-2 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            <Darkmode />
          </div>

          {/* Sign In Button */}
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full transition-all duration-200"
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {/* Main Menu Items */}
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className="group relative cursor-pointer">
            <div
              className="flex items-center gap-1 py-2"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Get to Know Us
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </div>
            <div
              className="absolute z-50 hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md"
              aria-label="Dropdown Menu"
            >
              <ul>
                {dropdownLinks.map((link) => (
                  <li
                    key={link.id}
                    className="w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
