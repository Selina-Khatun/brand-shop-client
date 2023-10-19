import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './products.css';
import Footer from '../Footer/Footer';
const Products = () => {
    const [filteredItem, setFilteredItem] = useState({});
    // const location = useLocation();
    const products = useLoaderData();
    // console.log(products);
    const { brand } = useParams();
    useEffect(() => {
        if (products && brand) {
            const foundItem = products.find(item => item.brand === brand);
            setFilteredItem(foundItem);
        }
    }, [brand, products]);
    if (!filteredItem) {

        return <div className=' lg:text-5xl pt-10 font-extrabold items-center font-sans text-rose-600 text-center  '>This brand has  no product available </div>;
    }

    const filteredProducts = products.filter(product => product.brand === brand);
    console.log(filteredProducts);
    return (
        <div>
            <h2>Products from <span className=' text-center text-4xl font-bold text-rose-600'><i>{filteredItem.brand}</i></span> </h2>
            <div className=' mx-auto' >
                {filteredProducts && filteredProducts.length > 0 ? (
                    <Carousel autoPlay className='main-slider' >
                        {filteredProducts.map((product) => (
                            <div key={product._id} >
                                <img fill="true" objectfit="cover" className='object-cover rounded-lg max-h-[75vh]' src={product.photo} alt={product.name} />
                                <p className="legend text-6xl">{product.name}</p>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <p>No products found for this brand.</p>
                )}

            </div>
            <h1 className='text-4xl py-5 text-center font-extrabold'>Featured products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-5'>
                {filteredProducts.map(product => (


                    <div key={product._id} className=''>

                        <div className=" bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <img className=" rounded-t-lg  h-80" src={product.photo} alt={product.name} />

                            <div className="px-5 pb-5">

                                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                <div className=' flex justify-between'>
                                    <h6 className="text-lg font-semibold tracking-tight text-rose-500 dark:text-white">{product.brand}</h6>
                                    <h6 className="text-lg font-semibold tracking-tight text-rose-500 dark:text-white">{product.category}</h6>
                                </div>

                                <div className="flex items-center mt-2.5 mb-5">
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Rating : {product.ratings}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: {product.price} $</span>
                                    <Link to={`/loreal/${product._id}`}> <button className="btn btn-outline btn-error">Details</button></Link>
                                    <button className='btn btn-error  btn-outline' >Update</button>
                                </div>
                            </div>
                        </div>

                    </div>


                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;