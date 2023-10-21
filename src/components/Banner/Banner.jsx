import React from 'react';

const Banner = () => {
    return (

        <div className="hero min-h-[80vh] h-fit" style={{ backgroundImage: 'url(https://i.ibb.co/nCmGCKR/beauty-skincare-CC9-TYE8-VJY.jpg)',backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Changing beauty for the better</h1>
                    <p className="mb-5">We don’t just have a “clean” section of our store, every product we offer meets The Credo Clean Standard™</p>
                
                </div>
            </div>
        </div>


    );
};

export default Banner;