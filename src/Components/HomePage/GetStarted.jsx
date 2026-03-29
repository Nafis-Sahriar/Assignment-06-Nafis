import React from 'react';
import { FaBox, FaRocket, FaUser } from 'react-icons/fa';

import userPNG from "../../assets/user.png";
import rocketPNG from "../../assets/rocket.png";
import boxPNG from "../../assets/package.png";

const GetStarted = () => {
    return (



        <div className="w-[90%] bg-[#F9FAFC] mx-auto pt-20">

     
      <div className="text-center mb-10">

                <h2 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-purple-800 via-purple-400 to-amber-400 bg-clip-text text-transparent"> Get Started In 3 Steps </h2>
                <p className="text-gray-500 text-sm md:text-base mt-2"> Start using premium digital tools in minutes, not hours.</p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 w-[95%]  gap-7 mx-auto pb-20">

            
            <div className="relative bg-white rounded-2xl shadow-md p-6 text-center md:h-95  flex flex-col items-center justify-center">

          
                    <span className="absolute top-4 right-4 bg-purple-700 text-white font-semibold text-xs px-2.5 py-2 rounded-full">01</span>
                
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
                        <img src={userPNG} alt="" />

                    </div>

                    <h3 className="font-semibold text-lg mb-2">Create Account</h3>
                    <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>

            </div>

           
            <div className="relative bg-white rounded-2xl shadow-md p-6 text-center md:h-95  flex flex-col items-center justify-center">

                    <span className="absolute top-4 right-4 font-semibold bg-purple-700 text-white text-xs px-2.5 py-2 rounded-full">02</span>

                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
                        <img src={boxPNG} alt=""/>
                    </div>

                        <h3 className="font-semibold text-lg mb-2">Choose Products</h3>
                        <p className="text-gray-500 text-sm">Browse our catalog and select the tools <br></br> that fit your needs.</p>

            </div>

           
            <div className="relative bg-white rounded-2xl shadow-md p-6 text-center md:h-95  flex flex-col items-center justify-center">

                    <span className="absolute top-4 right-4 bg-purple-700 text-white text-xs px-2.5 py-2 font-semibold rounded-full">03</span>

                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">
                        <img src={rocketPNG} alt="" />
                    </div>

                    <h3 className="font-semibold text-lg mb-2">Start Creating</h3>
                    <p className="text-gray-500 text-sm">Download and start using your premium <br></br> tools immediately.</p>
            </div>

      </div>
    </div>



    );
};

export default GetStarted;