import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; // Correct module imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import local images
import okraandfish from "../assets/okraandfish.jpg";
import ohasoup from '../assets/ohasoup.jpg';
import rice1 from '../assets/rice1.jpg';
import chickenstew from "../assets/chickenstew.jpg";

const FoodSlider = () => {
  const foodItems = [
    {
      img: okraandfish,
      title: 'Okra & Fish',
      description: 'A delicious Okra soup with fresh fish.',

    },
    {
      img: ohasoup,
      title: 'Oha Soup',
      description: 'Prepared with Goat meat and kpomo ',
     
    },
    {
      img: rice1,
      title: 'Fried Rice',
      description: 'Prepared with plantain, green beans, carrot..',
      
    },
    {
        img: chickenstew,
        title: 'Chicken Stew',
        description: 'Special Recipe Chicken Stew.',
        
      },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]} // Swiper automatically uses these modules
      spaceBetween={50}
      slidesPerView={1}
      navigation // Enables next/prev buttons
      pagination={{ clickable: true }} // Enables pagination
    //   scrollbar={{ draggable: true }} // Enables draggable scrollbar
    >
      {foodItems.map((food, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white py-10  shadow-lg items-center flex flex-col justify-center ">
                <div className='group bg-white  border border-gray-400 hover:border-none hover:bg-[#9d174d]  rounded-2xl pb-10 px-4 mb-6 hover:scale-105 duration-200 cursor-pointer hover:text-white'>
                    <img src={food.img} alt={food.title} className="w-full object-cover h-60 rounded-lg mt-[-40px]" />
                    <p className=" mt-2 font-comic">Special</p>
                    <h3 className="group-hover:text-[#fb923c]  font-semibold mt-2 font-luckiest">{food.title}</h3>
                    <p>{food.description}</p>
                    {/* <p className='font-luckiest'>N{food.price}</p> */}
                    <a href='https://wa.me/2348142810028'>
                        <p className='group-hover:bg-[#fb923c] text-sm font-luckiest bg-gray-800 py-2 rounded-lg mt-2 w-full text-center text-white'>ORDER NOW</p>
                    </a>
                </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FoodSlider;
