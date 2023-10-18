import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import AllBrands from '../../components/AllBrands/AllBrands';

const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1>data length {products.length}</h1>
            <Banner></Banner>
           <AllBrands></AllBrands>
           
            <h1 className='text-3xl font-bold text-center my-14'>you may also like</h1>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    products?.map(product => <Brands key={product._id} product={product}> </Brands>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;