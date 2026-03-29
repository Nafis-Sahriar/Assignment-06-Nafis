import React from "react";
import { TiTick } from "react-icons/ti";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 relative">

      
     

      
      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <img src={product.icon} alt="" />
      </div>

       <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-600 text-sm px-3 py-1 rounded-full">
        {product.tag}
      </span>


      {/* TITLE */}
      <h2 className="text-xl font-semibold mb-2">
        {product.name}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-500 text-sm mb-4">
        {product.description}
      </p>

      {/* PRICE */}
      <p className="text-2xl font-bold mb-4">
        ${product.price}
        <span className="text-gray-400 text-sm font-normal">
          / {product.period}
        </span>
      </p>

      
      <ul className="mb-6 space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
            <span className="text-green-500"><TiTick /></span>
            {feature}
          </li>
        ))}
      </ul>

     
      <button className="w-full py-3 rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        Buy Now
      </button>

    </div>
  );
};

export default Card;