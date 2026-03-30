import React from 'react';
import bannerPNG from "../../assets/banner.png"
import { GoDotFill } from "react-icons/go";
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (

    <div className="w-full  flex justify-center my-16">

  
        <div className="w-[90%] flex flex-col md:flex-row items-center justify-between gap-10">

        
            <div className="w-full md:w-full flex flex-col justify-center text-center items-center md:items-start  md:text-left">


                <div>

                    <span className="flex gap-2 items-center w-67 text-sm md:text-lg md:w-90 bg-[#E1E7FF] text-purple-600  px-4 py-1 rounded-full mb-4">
                            <GoDotFill /> New: AI-Powered Tools Available
                    </span> 

                </div>
                

                <h1 className="text-3xl text-center md:text-left md:text-7xl font-extrabold leading-tight mb-4">Supercharge Your <br /> Digital Workflow</h1>

                <p className="text-gray-500 text-sm text-center md:text-left md:text-base mb-6">
                    Access premium AI tools, design assets, templates, and productivity<br></br>
                    software—all in one place. Start creating faster today.<br></br>
                    Explore Products.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <button className="btn px-6 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</button>

                        <button className="px-6 btn flex items-center hover:bg-linear-to-r from-[#4F39f6] to-[#9514fa] hover:text-white gap-2 py-3 font-semibold rounded-full border border-purple-500 text-purple-600">
                           <CiPlay1 /> Watch Demo
                        </button>

                </div>

            </div>


            <div className="w-full md:w-1/2 flex justify-center">

                    <div className="w-full max-w-md md:max-w-lg">

                            <img src={bannerPNG} alt="banner" className="w-full rounded-2xl object-cover"/>
                            
                    </div>

            </div>

        </div>

   </div>
    );
};

export default Banner;