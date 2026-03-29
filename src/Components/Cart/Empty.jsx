import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Empty = () => {
    return (
        <div className="flex flex-col justify-center items-center mx-auto h-[40vh]">
                     <span className="text-8xl text-gray-600">
                  <CiShoppingCart />
                </span>
        
                <h1 className="text-2xl font-bold text-gray-600 text-center">
                  Cart is Empty.
                </h1>
                </div>
    );
};

export default Empty;