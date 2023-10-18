import React from 'react';

const Brands = ({ product }) => {
    const { name, photo, brand, price, category, ratings, description } = product
    return (
        <div className='my-10'>

            <div className=" bg-base-100 shadow-2xl rounded-full">
                <figure><img className=' w-[70%] rounded-full mx-auto justify-center' src={photo} alt="Shoes" /></figure>
                <h2 className=" text-center font-bold text-rose-500 py-5">{name}</h2>

            </div>
        </div>
    );
};

export default Brands;