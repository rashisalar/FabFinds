import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-6 py-12">
    <section data-aos="zoom-in"className="relative h-[300px] sm:h-[400px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg"
            alt="FebFinds Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div data-aos="zoom-out" className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold dark:text-white">Contact Us</h1>
          <p className="text-xl mt-2 dark:text-white">We're here to help with anything you need</p>
        </div>
      </section>
      <div data-aos="fade-up"className="text-center mb-8 mt-9">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Get in Touch</h2>
      </div>
      
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Contact Form</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4 dark:text-white">Our Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10l-6 6-6-6" />
              </svg>
              <p className="text-gray-600 dark:text-white">rashi75055gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 20l-2-2m0-4l2-2m-4 0l-2 2m-4-4l2 2m-4-4l2-2m-4 4l-2 2m2 0l2-2" />
              </svg>
              <p className="text-gray-600 dark:text-white">xxx-xxx-xxxx</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <p className="text-gray-600 dark:text-white">South Civil lines, Roorkee</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in">
        <h3 className="text-xl font-semibold text-gray-900 text-center mt-10 dark:text-white">Find Us on the Map</h3>
        <div className="mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.874973881941!2d-122.4125755846816!3d37.78385717975663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d9b52d1c1%3A0x410edb31734ffea9!2sApple%20Store!5e0!3m2!1sen!2sus!4v1635348478353!5m2!1sen!2sus"
            width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
    <div className="mt-8 mb-0"><Subscribe/></div>
    <Footer/>
    </>
  );
};

export default Contact;
