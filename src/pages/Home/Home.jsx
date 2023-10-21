import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import AllBrands from '../../components/AllBrands/AllBrands';
import Favorites from '../../components/Favorites/Favorites';
import './HomePage.light.css';
import './HomePage.dark.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 1000 });
const Home = () => {
    const products = useLoaderData();
    const displayedProducts = products.slice(0, 4);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    const containerStyle = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
    };
    return (
        <div style={containerStyle} className={`home-page ${isDarkMode ? 'dark' : 'light'}`}>

            <div className=' text-center items-center py-4'>
                <button data-aos="zoom-in-up" className='btn btn-outline btn-error items-center' onClick={toggleTheme}>
                    Toggle Theme {isDarkMode ? 'Light' : 'Dark'}
                </button>
            </div>


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