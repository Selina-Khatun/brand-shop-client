import React from 'react';

const Favorites = () => {
    return (
        <section>
            <div className="bg-black text-white container">
                <div className="container mx-auto flex flex-col  md:flex-row items-center my-12 md:my-24">
                    <div className="flex flex-col flex-1 justify-center items-start p-7">
                        
                        <h2 className="lg:text-7xl font-extrabold font-sans md:text-5xl  mb-2">Fall favorites
                        </h2>
                        <p className="text-sm md:text-base text-gray-50 mb-4">The products we reach for as the days get shorter.</p>
                        <a href="#"
                            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                            Explore Now</a>
                    </div>
                    <div className=" flex  flex-col justify-end p-8 mt-12 mb-6 md:mb-0 md:mt-0  mr-0 lg:w-[50%]">

                        <img className=" w-[30%] rounded-3xl xl:block" src="https://i.ibb.co/RSxSCrQ/woman-skin-VWXKIBZZYP.jpg" />

                        <img className=" mt-24 md:mt-0 rounded-3xl w-[60%]  p-3 md:p-0" src="https://i.ibb.co/RSxSCrQ/woman-skin-VWXKIBZZYP.jpg" />

                        <img className=" w-[40%] rounded-3xl  lg:block" src="https://i.ibb.co/RSxSCrQ/woman-skin-VWXKIBZZYP.jpg" />
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Favorites;