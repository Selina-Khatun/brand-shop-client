import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Loreal = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const products = useLoaderData();
    // console.log('Data:', products);
    const { id } = useParams();
    // console.log('ID:', id);

    useEffect(() => {
        if (products && id) {
            const foundItem = products.find(item => item._id === id);
            console.log(foundItem);
            setSelectedItem(foundItem);
        }
    }, [id, products]);

    if (!selectedItem || Object.keys(selectedItem).length === 0) {
        return <div><span className="loading loading-spinner loading-sm"></span></div>;
    }
    const { _id, name, photo, brand, price, category, ratings, description } = selectedItem;
    const backgroundImageStyle = {
        backgroundImage: `url(${photo})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
    return (
        <div>
            <div className="hero h-[70vh] " style={backgroundImageStyle}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" max-w-xl">
                        <h1 className="mb-5 text-5xl text-white font-bold">{name}</h1>
                        <Link to={"/myCart"}><button className="btn btn-outline btn-error">Add to cart</button></Link>

                    </div>
                </div>
            </div>
            <section className='flex justify-between py-10'>

                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Price: {price} $</h1>
                    <h5 className="text-2xl py-2 font-semibold tracking-tight text-gray-900 dark:text-white"> Product Name : {name}</h5>
                    <div className="rating rating-sm items-center py-3">
                        <p className=' font-bold text-orange-600 pr-10'>ratings : {ratings}</p>
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-9" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className=' '>
                        <h6 className="text-lg font-semibold tracking-tight text-rose-500 dark:text-white">Brand Name : {brand}</h6>
                        <h6 className="text-lg  py-4 font-semibold tracking-tight dark:text-white">Type : {category}</h6>
                        <p className=' bg-slate-100 p-9 my-4 rounded-full'>{description}</p>
                    </div>
                </div>

                <div className=' text-center'>
                    <div className=' bg-gray-100 text-center rounded-full py-5'>
                        <h1 className='text-xl font-bold'> Delivery</h1>
                        <h3 className='py-3'>Delivery charge inside Dhaka: 49.00 BDT</h3>
                        <h3>Delivery charge inside Dhaka: 120.00 BDT</h3>
                    </div>
                    <h1 className='text-xl font-bold py-4'>Return</h1>
                    <p className='px-5'>You will have 72 hours after item delivery to notify us that you want to return your product. If your item meets all the requirements, your return can be initiated by calling our customer service at +8809666....</p>
                </div>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default Loreal;