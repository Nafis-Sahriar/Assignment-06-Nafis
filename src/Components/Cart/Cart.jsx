import React from "react";
import Empty from "./Empty";
import CartProducts from "./CartProducts";
import { IoBagCheckOutline } from "react-icons/io5";
import { toast } from "react-toastify";



const Cart = ({cart, setCart}) => {

    const handleCheckout=()=>{
        cart =[];
        setCart(cart);
        toast.success("Payment Successful!" , {autoClose: 3000,theme: "colored",position: "top-center"});
    }

    const totalPrice = cart.reduce((sum, product)=>sum+product.price , 0);


  return (

    <>
       <div className=" w-[95%] md:w-[60%] mx-auto  rounded-2xl shadow-xl p-5 my-5">

        <div className="flex justify-between items-center">
            <h1 className="text-left text-xl md:text-2xl font-bold p-5">Your Cart</h1>
            <h1 className="font-bold text-lg md:text-xl">Total Products : {cart.length}</h1>
        </div>

        


        {
            cart.length===0 && <Empty></Empty>
        }

        {
            cart.length!=0 && <CartProducts cart={cart} setCart={setCart}></CartProducts>

        }

         {
        cart.length!==0 &&  

        <div className="w-[95%]  mx-auto  rounded-full shadow-xl p-3 ">


                <div className="flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold">Total Price</h1>
                    <h1 className="text-xl font-bold">${totalPrice}</h1>
                </div>

      </div>
      }

       
      </div>



      {
        cart.length!==0 &&  

        <div onClick={handleCheckout} className="w-[95%] md:w-[60%] mx-auto  rounded-full shadow-xl p-3 bg-green-700 ">


                <div className="text-xl  flex items-center justify-center gap-4 font-bold text-white text-center">Proceed To Checkout <button className="text-2xl"><IoBagCheckOutline /></button></div>
                

      </div>
      }
    

    

    </>
    
     

  );
};

export default Cart;
