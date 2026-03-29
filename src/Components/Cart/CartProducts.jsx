import React from 'react';
import { toast } from 'react-toastify';

const CartProducts = ({cart, setCart}) => {


    const handleRemove =(product) =>
    {
       const  newCart = cart.filter(prod=> prod.name != product.name);
        setCart(newCart)
        toast.error(`${product.name} Removed!`, {autoClose: 3000,theme: "colored"})
    }


    return (
        <div>
            {
                cart.map(product => <div key={product.id} className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between p-4 md:p-5 shadow-md rounded-2xl border-gray-500 my-8 w-[95%] mx-auto'>

                    <div className='flex gap-5'>
                            <img className='w-10 h-10 md:w-12 md:h-12' src={product.icon} alt="" />


                            <div>
                                    <h3 className='font-semibold text-sm md:text-base'>{product.name}</h3>
                                    <p>${product.price}</p>
                            </div>
                    </div>

                    <div className='w-full md:w-auto text-center'>
                        <button onClick={()=>handleRemove(product)} className='btn hover:bg-red-700 hover:text-white rounded-full btn-ghost text-red-500'>Remove</button>
                    </div>

                    



                </div>)
            }
            
        </div>
    );
};

export default CartProducts;