import React from "react"
import abt_bg from "../assets/abt_bg.jpg";
import Testimonies from "../components/Testimonies";

const Aboutusp = () => {
    return(
        <div className="pt-20 pb-4 ">
            <div className="bg-cover bg-center h-72 w-full pt-32 px-2 md:px-14"
                style={{ backgroundImage: `url(${abt_bg})` }} >
                <p className="text-5xl font-luckiest text-[#30ed5fe6]">About us</p>
            </div>

            <div>
                <Testimonies />
            </div>
            
        </div>
    )
}
export default Aboutusp;