import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";

const menuItems = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#service" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Women Wear", link: "/#" },
  { id: 6, name: "Electronics", link: "/#" },
];

const dropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
    
      <div className="bg-primary/40 py-1.5">
        <div className="container flex justify-between items-center">
          
          <div className="flex-1">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              FabFinds
            </a>
          </div>

          
          <div className="flex items-center gap-5">
    
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

            <button
              onClick={() => alert("Ordering not available yet")}
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
          <div className="flex-1"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}

          
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-1 py-2"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
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
                    <a href={link.link}>{link.name}</a>
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
