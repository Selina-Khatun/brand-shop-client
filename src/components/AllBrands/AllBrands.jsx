import React from 'react';
import { Link } from 'react-router-dom';

const AllBrands = () => {
    return (
        <section className=''>
            <h1 className='text-3xl font-bold text-center my-14'>~~Exclusive Brands~~</h1>
            <div className='grid lg:grid-cols-6 grid-cols-2 md:grid-cols-3 gap-6 p-10'>

                <Link to={"/loreal"}><div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/4WMPHbM/dior3.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">L'Oréal</h2>
                </div></Link>
                <div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/4WMPHbM/dior3.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">L'Oréal</h2>
                </div>
                <div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/4WMPHbM/dior3.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">L'Oréal</h2>
                </div>
                <div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/4WMPHbM/dior3.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">L'Oréal</h2>
                </div>
                <div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/4WMPHbM/dior3.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">L'Oréal</h2>
                </div>
                <div>
                    <div className="avatar">
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/4WMPHbM/dior3.jpg" />

                        </div>

                    </div>
                    <h2 className=" text-center font-bold text-rose-500 py-5">L'Oréal</h2>
                </div>



            </div>
        </section>
    );
};

export default AllBrands;