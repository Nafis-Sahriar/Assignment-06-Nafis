import React from 'react';

const LittleCount = ({cartLength}) => {
    return (

        <div>

        {
            cartLength !=0 && <span className='absolute -top-2 -right-2 bg-red-500 rounded-full text-white text-sm p-1 px-2'>{cartLength}</span>
        }
        
        </div>
        
        
    );
};

export default LittleCount;