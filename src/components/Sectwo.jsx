import React from "react"
import { useInView } from 'react-intersection-observer';
import './animations.css';
import macroni from "../assets/macroni.jpg";
import { Link } from "react-router-dom";


const Sectwo = () => {
    
    
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Adjust based on when you want the animation to start
    });
    return (
        <div className=" text-black w-full pt-32 pb-24 px-2 md:px-10 lg:px-16">
           <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div
            
                   className="transition-opacity duration-1000 ease-in-out  justify-center w-full mt-10 md:mt-0 hidden md:block ">
                    <img src={macroni} alt="img" className="w-full md:w-[400px] h-[300px] object-cover rounded-lg " />
                </div>
                <div className="w-full md:w-[700px]">
                    <a className="text-md bg-[#9d174d] text-white px-2 py-2 rounded-md font-luckiest">About us</a>
                    <h2
                     ref={ref}
                     className="transition-opacity duration-1000 ease-in-out text-4xl my-6 font-luckiest">Tasty Macroni Unmatched Flavor</h2>
                    <p>Foodz by Rita is a professional full service catering company. We are dedicated to innovative, environmentally-friendly, fresh, healthy and most of all, delicious flavors of the culinary world! We have over 10 years of combined kitchen and catering experience among our staff.

                    </p>
                    <Link to="/Aboutusp"> 
                        <button className="bg-[#fb923c] text-white text-sm px-4 py-2 rounded-lg mt-4 font-luckiest">LEARN MORE</button>
                    </Link>
                </div>
                <div
                   ref={ref}
                   className={`transition-opacity duration-1000 ease-in-out flex md:hidden justify-center w-full mt-10 md:mt-0 ${inView ? 'slide-in-from-bottom' : 'opacity-0'}`}>
                    <img src={macroni} alt="img" className="w-full md:w-[400px] h-[300px] object-cover rounded-lg" />
                </div>

           </div>
        </div>
    )
}

export default Sectwo;