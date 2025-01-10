import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';


const About = () => {
    const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-6">
      {/* Banner Section */}
      <section data-aos="zoom-in"className="relative h-[300px] sm:h-[400px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg"
            alt="FebFinds Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div data-aos="zoom-out" className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold">Welcome to FebFinds</h1>
          <p className="text-xl mt-2">Your One-Stop Shop for Everything You Love</p>
        </div>
      </section>

      {/* About Us Section */}
      <section data-aos="zoom-in"className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8">
            About FebFinds
            </h2>
           <p className="text-lg text-gray-900 dark:text-gray-300 text-center mb-12 leading-relaxed">
            At FebFinds, we believe shopping should be more than just a task – it should be an experience filled with excitement, inspiration, and satisfaction. We are your one-stop destination for premium products that blend style, functionality, and quality. Whether you're looking to revamp your wardrobe, find the perfect gift, or enhance your lifestyle, FebFinds is here to cater to all your needs.
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-300 text-center mb-12 leading-relaxed">
            Our journey started with a simple goal: to make high-quality, stylish products accessible to everyone. Since then, we've expanded into a platform that serves thousands of customers daily, offering everything from fashionable clothing to everyday essentials. We carefully curate each product in our collection to ensure it meets the highest standards of design and quality.
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-300 text-center mb-12 leading-relaxed">
            At FebFinds, we are more than just an e-commerce platform. We are a community of style enthusiasts, trendsetters, and savvy shoppers. Our team is passionate about discovering the latest trends and sharing them with you. We strive to deliver a seamless shopping experience, from browsing our collections to unboxing your favorite products at home.
            </p>
            <p className="text-lg text-gray-900 dark:text-gray-300 text-center mb-12 leading-relaxed">
            With a commitment to excellence, FebFinds ensures that every step of your shopping journey is easy, secure, and enjoyable. Join us as we redefine the way you shop – where fashion meets functionality and quality meets affordability. Welcome to FebFinds, where every purchase is a step toward enhancing your lifestyle.
            </p>

          {/* Quote Section */}
          <div className=" bg-gradient-to-r from-red-900 to-indigo-500 rounded-lg p-8 text-center shadow-md text-white">
            <blockquote className="italic text-2xl sm:text-3xl">
              "Great design is a multi-layered relationship between human life and its environment."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section data-aos="zoom-in"className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Products",
                description:
                  "We ensure every product you receive meets the highest standards of quality.",
                icon: "💎",
              },
              {
                title: "Fast Shipping",
                description:
                  "Quick and reliable delivery so you can enjoy your purchases sooner.",
                icon: "🚚",
              },
              {
                title: "Customer Support",
                description:
                  "Our support team is here 24/7 to help with any queries or issues.",
                icon: "🤝",
              },
              {
                title: "Exclusive Deals",
                description:
                  "Get the best prices and exclusive discounts only at FebFinds.",
                icon: "🔥",
              },
              {
                title: "Easy Returns",
                description:
                  "Hassle-free returns policy to ensure a smooth shopping experience.",
                icon: "↩️",
              },
              {
                title: "Secure Payments",
                description:
                  "Shop confidently with our secure and trusted payment options.",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section data-aos="zoom-in" className="py-16 bg-gradient-to-r from-red-700 to-indigo-700 text-white text-center">
      <h2 className="text-3xl sm:text-5xl font-bold mb-6">
        Join the FebFinds Community Today!
      </h2>
      <p className="text-lg mb-8">
        Discover the latest trends, enjoy unbeatable deals, and shop from the comfort of
        your home.
      </p>
      <button
        data-aos="fade-up"
        className="bg-white text-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-700 hover:text-white"
        onClick={() => navigate('/')}
      >
        Start Shopping Now
      </button>
    </section>
      <section className="relative h-[300px] sm:h-[400px]  text-black flex items-center justify-center mt-5">
        <div className="max-w-6xl mx-auto">
          <p data-aos="zoom-out" className="className= text-lg font-semibold text-gray-900 dark:text-gray-300 text-center leading-relaxed">
            Here’s a comprehensive paragraph for your About FebFinds section:
            At FebFinds, we aim to transform the way you shop by bringing you a seamless and enjoyable experience that blends style, quality, and affordability. As a shopping destination that values innovation and customer satisfaction, we are proud to offer an extensive range of products, from trendy fashion apparel to everyday essentials. Every item in our collection is thoughtfully curated to reflect the latest trends while ensuring exceptional quality. Whether you're refreshing your wardrobe, searching for the perfect gift, or looking for lifestyle upgrades, FebFinds is here to inspire and empower your choices. We are more than just an e-commerce platform; we are a community built on trust, creativity, and a shared passion for making every purchase meaningful. With FebFinds, shopping becomes more than a necessity – it becomes a moment to explore, express, and elevate your lifestyle.
          </p>
        </div>
      </section>
      <div className="mt-10">
        <Subscribe/>
        <Footer/>
        </div>
    </div>
    </>
  )
}

export default About
