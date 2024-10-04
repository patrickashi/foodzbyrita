import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './animations.css';
import { MdArrowOutward } from "react-icons/md";
import "@fontsource/luckiest-guy";  // Defaults to weight 400
import "@fontsource/bangers"; 
import food1 from "../assets/food1.jpg";


const Secone = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      setShowContent(true);
    }, []);

    return (
        <div className="h-full flex flex-col md:flex-row w-full  text-black pb-10">
            <div className="pt-40 px-2 md:px-10 lg:px-16 ">
                <h2 className={`text-4xl mb-4 md:text-6xl font-luckiest ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Delicious & High </h2>
                <h2 className={`text-4xl mb-4 md:text-6xl font-luckiest ${showContent ? 'h2-slide-in' : 'hidden-initially'}`}>Quality Food</h2>
                
                <p className={`my-6 text-xl mt-10 md:mt-4 ${showContent ? 'p-slide-in' : 'hidden-initially'}`}>better food, better mood</p>

                <p className=' text-[#059669] font-semibold'>INGREDIENTS</p>

                <Link to="/Quotep">
                    <button className="bg-[#fb923c] text-white px-4 py-4 rounded-md mt-20 md:mt-10 flex">ORDER NOW</button>
                </Link>
                
            </div>

            <div className='flex py-10 md:py-20 px-2 md:px-20'>
                <img src={food1} className='flex justify-center mt-10 ml-0 md:ml-16 w-full md:w-80 h-100 rounded-md' alt="bg" />
            </div>
        </div>
    )
}

export default Secone;