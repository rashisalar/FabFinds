import React from 'react'
import Slider from 'react-slick'
import { Autoplay } from 'swiper/modules'

const testimonailData=[
    {
        id:1,
        name:"Sanjeev Kumar",
        Text:"Amazing experience! The service was exceptional, and I couldn't be happier.",
        img:"https://img.freepik.com/premium-photo/indian-male-model_928503-1125.jpg",
    },
    {
        id:2,
        name:"Ishika Singh",
        Text:"Truly remarkable! The team went above and beyond to meet my expectations.",
        img:"https://img.freepik.com/premium-photo/captivating-smile-radiant-young-indian-model-showcases-perfect-dental-care_983420-9652.jpg?w=360",
    },
    {
        id:3,
        name:"Robert Conner",
        Text:"Highly recommended! I loved every aspect of the service provided.",
        img:"https://img.freepik.com/premium-photo/portrait-turkish-young-man-with-beard-white-background_92795-4804.jpg?w=360",
    },
    {
        id:4,
        name:"Marie Burgess",
        Text:"A wonderful experience! I felt valued as a customer and will return for sure.",
        img:"https://img.freepik.com/premium-photo/indian-woman-model_928503-1260.jpg",
    },
    {
        id:5,
        name:"Sheila Dever",
        Text:"Fantastic service! They truly care about their customers and it shows.",
        img:"https://img.freepik.com/premium-photo/beautiful-indian-female-model_928503-1127.jpg?w=360",
    },
]

const Testimonial = () => {

    var settings={
        dots:true,
        arrows:false,
        Infinite:true,
        speed:500,

        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:3,
                    Infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2,
                },
            },{
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };

  return (
    <div className="py-10 mb-10 ">
      <div className="container">
        {/*header section*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-m  text-orange-700 mb-3 font-semibold">What our customers are saying</p>
            <h1 data-aos="fade-up" className="text-4xl font-bold mb-4">Testimonail</h1>
            <p data-aos="fade-up" className="text-s text-gray-900">We value the feedback of our customers, and here’s what they have to say about us!</p>
        </div>
        {/*cards*/}
        <div 
        data-aos="zoom-in"
        >
          <Slider {... settings}>
            {testimonailData.map((data)=>(
                <div data-aos="zoom-in" className="my-6 ">
               <div
               key={data.id}
               className="flex flex-col gap-4 shadow-lg
                          py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative  dark:hover:bg-orange-900"
               >
                <div className="mb-4">
                    <img src={data.img} alt="" 
                    className="rounded-full w-20 h-20"
                    />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                    <p className="text-xs text-gray-700 dark:text-white"
                    >{data.Text}</p>
                    <h1 className="font-semibold text-black dark:text-light dark:text-white">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-white">
                    ,,
                  </p>
               </div>
               </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
