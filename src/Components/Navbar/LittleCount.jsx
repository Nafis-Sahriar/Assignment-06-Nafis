import React from 'react';

const LittleCount = ({cartLength}) => {
    return (

        <div>

        {
            cartLength !=0 && <span className='absolute -top-5 -right-4  bg-red-500 rounded-full text-white text-sm  px-2'>{cartLength}</span>
        }

        </div>
        
        
    );
};

export default LittleCount;