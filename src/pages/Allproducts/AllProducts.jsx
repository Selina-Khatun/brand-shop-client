import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Brands from '../../components/Brands/Brands';
import Footer from '../../components/Footer/Footer';

const AllProducts = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    products?.map(product => <Brands key={product._id} product={product}> </Brands>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;