import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import AllBrands from '../../components/AllBrands/AllBrands';
import Favorites from '../../components/Favorites/Favorites';

const Home = () => {
    const products = useLoaderData();
    const displayedProducts = products.slice(0, 4); 
    return (
        <div>
            <Banner></Banner>
           <AllBrands></AllBrands>
           
            <h1 className='text-3xl font-bold text-center my-14'>you may also like</h1>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    displayedProducts?.map(product => <Brands key={product._id} product={product}> </Brands>)
                }
            </div>
            <Favorites></Favorites>

            <Footer></Footer>
        </div>
    );
};

export default Home;