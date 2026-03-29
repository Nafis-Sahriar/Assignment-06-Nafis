import React from "react";
import Empty from "./Empty";
import CartProducts from "./CartProducts";



const Cart = ({cart, setCart}) => {



  return (
    
      <div className="w-[60%] mx-auto  rounded-2xl shadow-xl p-5">

        <div className="flex justify-between items-center">
            <h1 className="text-left text-2xl font-bold p-5">Your Cart</h1>
            <h1 className="font-bold text-xl">Total Products : {cart.length}</h1>
        </div>

        


        {
            cart.length===0 && <Empty></Empty>
        }

        {
            cart.length!=0 && <CartProducts cart={cart} setCart={setCart}></CartProducts>
        }

       

       
      </div>

  );
};

export default Cart;
