import React from 'react';
import { Link } from 'react-router-dom';

const AllBrands = () => {
    return (
        <section className=' w-[95%] mx-auto'>
            <h1 className='text-3xl font-bold text-center my-14'>~~Exclusive Brands~~</h1>
            <div className='grid lg:grid-cols-6 grid-cols-2 md:grid-cols-3 gap-3 p-3'>
                <Link className='w-[70%]' to={"/products/L'Oréal"}><div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-rose-200 ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/r7VnCp4/loreal1.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">L'Oréal</h2>
                </div>
                </Link>
                <Link className='w-[70%]' to={"/products/Chanel"}>
                    <div className="avatar ">
                        <div className=" rounded-full ring ring-rose-200 ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/w72JFW2/chanel1.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">Chanel</h2>

                </Link>
                <Link className='w-[70%]' to={"/products/Revlon"}><div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-rose-200 ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/wYLzQ5h/revlon1.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">Revlon</h2>
                </div>
                </Link>
                <Link className='w-[70%]' to={"/products/Coty"}>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-rose-200 ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/f8KNLk8/coty1.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">Coty</h2>

                </Link>
                <Link className='w-[70%]' to={"/products/Dior"}><div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-rose-200 ring-offset-base-100 ring-offset-1">
                            <img src="https://i.ibb.co/ftrcyTT/dior2.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">Dior</h2>
                </div>
                </Link>
                <Link className='w-[70%]' to={"/products/EVELINE"}><div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-rose-200 ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/r2vT2Tm/est-e-Lauder1.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">EVELINE</h2>
                </div>
                </Link>







            </div>
        </section>
    );
};

export default AllBrands;