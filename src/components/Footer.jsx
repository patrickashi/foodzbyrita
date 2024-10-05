import React from "react"

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaRegFileCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { TiGroup } from "react-icons/ti";
import foodz_by_rita_logo from "../assets/foodz_by_rita_logo.png";

const Footer = () => {
    return (
        <div className="duration-200 text-white ">
            <div className="flex gap-8 flex-col px-2 md:px-10 lg:px-16 py-10 md:flex-row bg-[#9d174d] justify-between pb-4">
                
                <div className="text-center">
                    <h1 className=" mb-4 font-luckiest text-[#fb923c] text-lg">INFORMATION</h1>
                    <p className="">Ikeja, Lagos, Nigeria</p>
                    <p className="">Call us now: +234 814 265 0809</p>
                    <p>Email: grabella1527@gmail.com</p>
                </div>
               
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        <img src={foodz_by_rita_logo} className="w-32 rounded-md" alt="logo" />
                    </div>
                    <p className="mb-2">Feel free to discuss your Budjet</p>
                    <ul className="flex justify-center gap-4">
                        <li className="border-r pr-2">
                            <a href="https://wa.me/2348142810028">
                                <FaWhatsapp className="mt-1 mr-1 text-white" />
                            </a>
                        </li>
                        <li className="">
                            <a href="https://www.instagram.com/foodz_by_rita?igsh=ZGUzMzM3NWJiOQ==">
                                <FaInstagram className="mt-1 mr-1 text-white"/>
                            </a>
                        </li>
                        {/* <li className="border-r pr-2">
                            <a href="https://www.TikTok.com/">
                                <FaTiktok className="mt-1 mr-1 text-white"/>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className="text-center">
                    <h1 className=" mb-4 font-luckiest text-[#fb923c] text-lg">WORKING HOURS</h1>
                    <p>Monday - Friday 08:00 am to 12:00 pm</p>
                    <p>Saturday 10:00 am to 03:00 pm</p>
                    <p>Sunday 12:00 pm to 05:00 pm</p>
                </div>
            </div>

            <div className="flex flex-col gap-2  text-center py-4 px-2 md:px-10 lg:px-16 text-xs text-white bg-[#9d174d]">
                
                <div>©2024 all rights reserved <span className="text-[#fb923c]">foodz_by_rita</span> </div>
            </div>
        </div>
    )
}

export default Footer;