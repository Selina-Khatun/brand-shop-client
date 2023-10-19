import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({ product }) => {
    const {_id, name, photo, brand, price, category, ratings, description } = product;
    return (
        <div className='my-10'>

            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className=' w-full  max-h-60 ' src={photo} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold'>{brand}</p>
                    <p className=' text-rose-500 font-semibold text-2xl'>Price :  {price} $</p>
                    <div className="rating rating-sm items-center">
                        <p className=' font-bold text-orange-600'>ratings : {ratings}</p>
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions justify-end">
                    
                        <Link to={`/loreal/${_id}`}> <button className="btn btn-outline btn-error">Details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;