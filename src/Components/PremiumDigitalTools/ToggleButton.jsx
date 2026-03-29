import React from 'react';

const ToggleButton = ({setActiveMode, cart}) => {
    return (
         <div className="tabs  gap-4 justify-center my-10  w-[90%] mx-auto sticky top-16 z-11 bg-white">

          <input onClick={()=>setActiveMode("product")}  type="radio" name="my_tabs_1" className="tab checked:bg-linear-to-r from-[#4F39F6] to-[#9514fa] checked:text-white checked:font-bold rounded-full shadow-xl px-5" aria-label="Product" defaultChecked/>
          <input onClick={()=>setActiveMode("cart")} type="radio" name="my_tabs_1" className="tab checked:bg-linear-to-r from-[#4F39F6] to-[#9514fa] checked:text-white checked:font-bold rounded-full px-5 shadow-xl" aria-label={`Cart ${cart.length}`}  />
          
        </div>
    );
};

export default ToggleButton;