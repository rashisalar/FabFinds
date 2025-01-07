import React from 'react'

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gradient-to-r from-red-900 to-indigo-500 drop-shadow-[-9px_9px_10px_rgba(0,0,0,0.5)]"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className=" space-y-6 max-w-xl mx-auto">
          <h1 className="font-semibold text-2xl !text-center sm:text-left sm:text-4xl ">Get Notified About New Products</h1>
           <input 
           data-aos="fade-up"
           type="text"
           placeholder="Enter your email"
           className="w-full p-3 mt-2 text-black font-semibold"
           />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
