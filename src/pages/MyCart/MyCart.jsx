import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';
const MyCart = () => {
    const carts = useLoaderData();
    const [allCarts, setAllCarts] = useState(carts);

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product?",
            icon: "warning",
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://brand-shop-server-o7wq85cow-selinakhatuns-projects.vercel.app/carts/${id}`, {
                        method: 'DELETE'
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Your imaginary product has been deleted!", "success");
                                const remaining = allCarts.filter((cart) => cart._id !== id);
                                setAllCarts(remaining);
                            }
                        });
                }
            });
    };

    if (allCarts.length < 1) {
        return (
            <div className='lg:text-4xl pt-14 font-extrabold items-center font-sans text-rose-600 text-center'>
                No products have been added to the card
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                allCarts?.map(cart => (
                    <div key={cart._id}>

                        <div className=" bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <img className=" rounded-t-lg  h-80" src={cart.photo} alt={cart.name} />

                            <div className="px-5 pb-5">

                                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{cart.name}</h5>
                                <div className=' flex justify-between'>
                                    <h6 className="text-lg font-semibold tracking-tight text-rose-500 dark:text-white">{cart.brand}</h6>
                                    <h6 className="text-lg font-semibold tracking-tight text-rose-500 dark:text-white">{cart.category}</h6>
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
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Rating : {cart.ratings}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: {cart.price} $</span>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleDelete(cart._id)} className="btn btn-primary">delete</button>
                                        {/* <Link to={`/loreal/${cart._id}`}> <button className="btn btn-outline btn-error">Details</button></Link>
                                        <Link to={`/updateProduct/${cart._id}`}><button className='btn btn-error  btn-outline' >Update</button></Link> */}

                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default MyCart;