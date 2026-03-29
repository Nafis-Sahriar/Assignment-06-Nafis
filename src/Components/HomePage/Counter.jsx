import React from 'react';
import linePNG from "../../assets/Line 5.png"

const Counter = () => {
    return (
        <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10">

  <div className="flex items-center justify-center gap-6 md:gap-12 text-center text-3xl md:text-6xl font-bold">

   
    <div> 50K+ <p className="text-sm font-normal mt-1">Active Users</p></div>

    
    <img src={linePNG} alt="" />

    
    <div>200+<p className="text-sm font-normal mt-1">Premium Tools</p></div>
    
    <img src={linePNG} alt="" />

   
    <div>4.9<p className="text-sm font-normal mt-1">Rating</p></div>

  </div>

</div>
    );
};

export default Counter;