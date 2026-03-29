import React, { use } from 'react';
import Card from '../Card/Card';


const Tools = ({productPromise, cart, setCart}) => {

    

    

    // Ekhane sobgulo model er promise ashbe. ami taderke use kore pathay dibo map kore kore card ante.


    const products = use(productPromise);

    // console.log(products);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto gap-7'>

            {
                products.map(product => 

                        <Card key={product.id} product={product} cart={cart} setCart={setCart}></Card>

                )
            }
            




        </div>
    );
};

export default Tools;