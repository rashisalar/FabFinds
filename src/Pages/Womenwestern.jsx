// import React from "react";
// import { FaStar } from "react-icons/fa";

// // Importing product images
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"
// import wes1 from"../assets/WesternWear/wes1.jpg"        

// // Product data
// const ProductsData = [
//   { id: 1, img: wes1, title: "Necklace", description: "Elegant necklace with intricate designs.", rating: 4 },
//   { id: 2, img: wes2, title: "Necklace", description: "Elegant necklace with intricate designs.", rating: 4 },
//   { id: 3, img: wes3, title: "Necklace", description: "Elegant necklace with intricate designs.", rating: 4.3 },
//   { id: 4, img: wes4, title: "Full Set", description: "Complete jewelry set for every occasion.", rating: 5 },
//   { id: 5, img: wes5, title: "Full Set", description: "Complete jewelry set for every occasion.", rating: 5 },
//   { id: 6, img: wes6, title: "Full Set", description: "Complete jewelry set for every occasion.", rating: 4.4 },
//   { id: 7, img: wes7, title: "Earrings", description: "Beautiful earrings to enhance your look.", rating: 4.5 },
//   { id: 8, img: wes8, title: "Earrings", description: "Beautiful earrings to enhance your look.", rating: 5 },
//   { id: 9, img: wes9, title: "Earrings", description: "Beautiful earrings to enhance your look.", rating: 4.5 },
//   { id: 10, img: wes10, title: "Rings", description: "Exquisite rings crafted with care.", rating: 4.9 },
//   { id: 11, img: wes11, title: "Rings", description: "Exquisite rings crafted with care.", rating: 5 },
//   { id: 12, img: wes12, title: "Rings", description: "Exquisite rings crafted with care.", rating: 4.8 },
// ];

// const Womenwestern = ({ setOrderPopup }) => {
//   return (
//     <div className="mt-10 top-products">
//       <div className="container">
//         <div className="text-center mb-10">
//           <p className="text-m text-yellow-700 mb-3 font-semibold" data-aos="fade-up">
//             Dazzling Elegance
//           </p>
//           <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
//             Shine Like Never Before!
//           </h1>
//           <p className="mb-4 text-m text-gray-900" data-aos="fade-up">
//             Discover our exquisite collection of jewelry, where timeless beauty meets exceptional craftsmanship.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
//           {ProductsData.map((data) => (
//             <div
//               key={data.id}
//               data-aos="zoom-in"
//               className="rounded-2xl bg-white dark:bg-gray-800 dark:text-white hover:bg-black/80 dark:hover:bg-orange-900 hover:text-white relative shadow-xl duration-200 group max-w-[300px]"
//             >
//               <div className="h-[250px] w-[200px] mx-auto relative overflow-hidden rounded mb-4">
//                 <img
//                   src={data.img}
//                   alt={data.title}
//                   className="h-full w-full object-cover transform group-hover:scale-105 duration-300"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <div className="flex items-center justify-center gap-1 mb-2">
//                   {Array.from({ length: Math.floor(data.rating) }, (_, index) => (
//                     <FaStar key={index} className="text-yellow-500" />
//                   ))}
//                   {data.rating % 1 !== 0 && <FaStar className="text-yellow-500 opacity-50" />}
//                 </div>
//                 <h1 className="text-xl font-bold">{data.title}</h1>
//                 <p className="text-gray-700 group-hover:text-white duration-300 text-sm line-clamp-2 dark:text-gray-100">
//                   {data.description}
//                 </p>
//                 <button
//                   className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
//                   onClick={setOrderPopup}
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default  Womenwestern;
