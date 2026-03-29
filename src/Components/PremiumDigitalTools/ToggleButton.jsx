import React from 'react';

const ToggleButton = () => {
    return (
         <div className="tabs  gap-4 justify-center my-10 border w-[90%] mx-auto">

          <input type="radio" name="my_tabs_1" className="tab checked:bg-linear-to-r from-[#4F39F6] to-[#9514fa] checked:text-white checked:font-bold rounded-full px-5" aria-label="Product" defaultChecked/>
          <input type="radio" name="my_tabs_1" className="tab checked:bg-linear-to-r from-[#4F39F6] to-[#9514fa] checked:text-white checked:font-bold rounded-full px-5" aria-label="Cart 0"  />
          
        </div>
    );
};

export default ToggleButton;