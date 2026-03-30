import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const Card = ({ product, cart, setCart }) => {

    const [buttonText, setButtonText] =useState(false);

    const handleBuyNow=()=>
    {
        setButtonText(true);

        const isFound = cart.find(prod => prod.name === product.name);

        if(!isFound)
        {
            setCart([...cart, product]);
            toast.success(`${product.name} - Added to Cart!`,{autoClose: 3000,theme: "colored",position: "top-right"} )
        }
        else
        {
           toast.warning(`${product.name} Already Exists in your Cart!`, {autoClose: 3000,theme: "colored",position: "top-center"})
        }


        
    }


  return (
    <div className="bg-white rounded-2xl shadow-md p-6 relative">

      
     

      
      <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <img src={product.icon} alt="" />
      </div>


        {
            product.tag==="New" && <span className="absolute top-4 right-4 bg-green-200 text-green-700 font-bold text-sm px-3 py-1 rounded-full">
             {product.tag}
             </span>
        }
        {
            product.tag==="Popular" && <span className="absolute top-4 right-4 bg-purple-300 text-purple-700 font-bold text-sm px-3 py-1 rounded-full">
             {product.tag}
             </span>
        }
        {
            product.tag==="Best Seller" && <span className="absolute top-4 right-4 bg-yellow-300 font-bold text-yellow-700 text-sm px-3 py-1 rounded-full">
             {product.tag}
             </span>
        }

     

      <h2 className="text-xl font-semibold mb-2">{product.name} </h2>


      <p className="text-gray-500 text-sm mb-4">{product.description}</p>

      
      <p className="text-2xl font-bold mb-4">${product.price}
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

     
      <button onClick={handleBuyNow} className={`btn w-full py-3 font-bold rounded-full text-white ${buttonText? "bg-green-500" :" bg-linear-to-r from-[#4F39F6] to-[#9514FA]   hover:bg-linear-to-r hover:from-[#720ebe] hover:to-[#432cf4]" }  `}>

        {buttonText?"Added To Cart" : "Buy Now"}
        
        
        </button>

    </div>
  );
};

export default Card;