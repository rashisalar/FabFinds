import React from "react";
import ElectronicsImg from "../../assets/categories/Electronics.jpg";
import ClothingImg from "../../assets/categories/Clothing.jpg";
import HomeAppliancesImg from "../../assets/categories/HomeAppliances.jpg";
import ToysImg from "../../assets/categories/Toys.jpg";

const CategoriesData = [
  {
    id: 1,
    img: ElectronicsImg,
    title: "Electronics",
    description: "Gadgets, devices, and more",
    color: "blue",
    aoseDelay: "0",
    link: "/electronics", // Link for the category
  },
  {
    id: 2,
    img: ClothingImg,
    title: "Clothing",
    description: "Trendy and stylish apparel",
    color: "red",
    aoseDelay: "200",
    link: "/top-rated", // Link for the category
  },
  {
    id: 3,
    img: HomeAppliancesImg,
    title: "Home Appliances",
    description: "Essential tools for your home",
    color: "green",
    aoseDelay: "400",
    link: "/homeAppliances", // Link for the category
  },
  {
    id: 4,
    img: ToysImg,
    title: "Toys",
    description: "Fun and games for kids",
    color: "yellow",
    aoseDelay: "600",
    link: "/kid-wear", // Link for the category
  },
];

const Categories = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-m text-orange-700 mb-3 font-bold"
          >
            Popular Categories
          </p>
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold mb-4"
          >
            Explore Categories
          </h1>
          <p
            data-aos="fade-up"
            className="text-s"
          >
            Browse through our wide range of categories and find what you need for your home, wardrobe, or entertainment.
          </p>
        </div>

        {/* Body Section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2
              md:grid-cols-3 lg:grid-cols-4 place-items-center
              gap-6"
          >
            {/* Card Section */}
            {CategoriesData.map((data) => (
              <a
                href={data.link}
                key={data.id}
                className="space-y-3 bg-gray-100 rounded-lg p-4 dark:bg-gray-800 dark:text-white hover:bg-black/80 hover:text-white relative shadow-xl duration-200 group max-w[300px] dark:hover:bg-orange-900"
                data-aos="zoom-in"
                data-aos-delay={data.aoseDelay}
              >
                <img
                  src={data.img}
                  alt={`Image of ${data.title}`}
                  className="h-[180px] w-full object-cover rounded-md mb-4"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{data.title}</h3>
                  <p className="text-sm text-gray-700 group-hover:text-white duration-300 dark:text-gray-100">
                    {data.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
