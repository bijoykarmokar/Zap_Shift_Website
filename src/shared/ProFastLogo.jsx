import React from 'react';
import image from "../../public/logo.png"

const ProFastLogo = () => {
    return (
        <div className='flex items-center'>
            <img src={image} alt="Image Not Found" />
            <h2 className='text-xl md:text-2xl lg:text-4xl font-bold mt-5 -ml-3'>Profast</h2>
        </div>
    );
};
export default ProFastLogo;