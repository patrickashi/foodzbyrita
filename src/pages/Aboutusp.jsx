import React from "react"
import abt_bg from "../assets/abt_bg.jpg";
import Testimonies from "../components/Testimonies";
import foodz_logo2 from "../assets/foodz_logo2.jpg";

const Aboutusp = () => {
    return(
        <div className="pt-20 pb-4 ">
            <div className="bg-cover bg-center h-72 w-full pt-32 px-2 md:px-14"
                style={{ backgroundImage: `url(${abt_bg})` }} >
                <p className="text-5xl font-luckiest text-[#30ed5fe6]">About us</p>
            </div>

            <div className="group flex flex-col md:flex-row mx-2 md:mx-10 lg:mx-16 px-2 md:px-4 lg:px-6 py-10 rounded-lg bg-[#9d174d] hover:bg-black mt-10 mb-4 text-white text-sm">
                    <div>
                        <p> 
                            Foodz by Rita is a professional full service catering company. We are dedicated to innovative,
                            environmentally-friendly, fresh, healthy and most of all, delicious flavors of the culinary
                            world! We have over 10 years of combined kitchen and catering experience among our staff.
                        </p>
                        <p className="my-4">
                            We launched our company in the catering business to bring our valued clients, the very best
                            in local and Intercontinental dishes for all types of events such as weddings, concessions,
                            corporate and social gatherings.
                        </p>
                        <p>
                            We have a professional catering environment and a team of professionals dedicated to help
                            clients achieve success for every event.

                        </p>
                        <p className="my-4">
                            If you want to know where we're located, our hours of business, or simply what makes us tick, just follow the provided links for more information.

                        </p>
                        <p className="">
                            It's extremely important to us that our clients know whom they're doing business with. Once you take the time to find out what we're all about, we're confident you'll like what you see.
                        </p>
                        <p className="font-luckiest text-2xl text-[#fb923c] mt-6 mb-2 group-hover:text-yellow-600 duration-200">
                            OUR CORE COMPETENCY
                        </p>
                        <p>
                            We will consistently provide exceptional service, outstanding cuisine with a distinguished presentation. Our strength lies in preparing our traditional recipes for our clients. Our culinary creativity and friendly service keeps them coming back to us.
                        </p>
                        <p>
                            Feel free to contact us if you need assistance with menu development. We are happy to help and able to create custom proposals and cost summaries. Contact us anytime for questions. If you don’t see something listed that you’re looking for, simply ask us.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <img src={foodz_logo2} className="rounded-md" alt="logo" />
                    </div>
            </div>

            <div>
                <Testimonies />
            </div>
            
        </div>
    )
}
export default Aboutusp;