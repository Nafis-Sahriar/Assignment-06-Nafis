import React from 'react';

const CartProducts = ({cart, setCart}) => {


    const handleRemove =(product) =>
    {
       const  newCart = cart.filter(prod=> prod.name != product.name);
        setCart(newCart)
    }


    return (
        <div>
            {
                cart.map(product => <div key={product.id} className='flex items-center justify-between p-5 shadow-md rounded-2xl border my-8 w-[90%] mx-auto'>

                    <div className='flex gap-5'>
                            <img className='w-12' src={product.icon} alt="" />


                            <div>
                                    <h3>{product.name}</h3>
                                    <p>${product.price}</p>
                            </div>
                    </div>

                    <div>
                        <button onClick={()=>handleRemove(product)} className='btn rounded-full btn-ghost text-red-500'>Remove</button>
                    </div>

                    



                </div>)
            }
            
        </div>
    );
};

export default CartProducts;