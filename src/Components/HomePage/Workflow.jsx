import React from 'react';
import { BsDot } from 'react-icons/bs';

const Workflow = () => {
    return (
        <div className='sticky top-16 z-16'>
            <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 flex justify-center ">

                <div className="w-[95%] md:w-[90%] max-w-4xl text-center text-white">

                    <h2 className="text-3xl md:text-5xl font-bold mb-4"> Ready To Transform Your Workflow?</h2>

                    <p className="text-white text-sm mt-8 mb-8">Join thousands of professionals who are already using DigiTools to work smarter.<br />Start your free trial today.</p>

        
                    <div className="flex flex-row justify-center gap-4 mb-6">

                  
                        <button className="px-6 btn py-3 rounded-full bg-white text-purple-600 font-bold">Explore Products</button>
                        <button className=" btn rounded-full border bg-transparent btn-outline hover:bg-white py-3  hover:text-purple-600  border-white text-white font-bold"> View Pricing</button>

                    </div>

                    <p className="text-gray-200 text-sm flex items-center justify-center"> 14-day free trial <BsDot /> No credit card required <BsDot /> Cancel anytime</p>

                </div>

            </div> 

        </div>
    );
};

export default Workflow;