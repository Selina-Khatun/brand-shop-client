import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    // const handleLogout = () => {
    //     logOut().then();
    // }


    const handleLogout = () => {
        console.log("Logging out...");
        logOut()
            .then(() => {
                console.log("Logged out successfully.");
            })
            .catch(error => {
                console.error("Log out error:", error);
            });
    }
    const navLink = <>
        <li><NavLink className='mr-4 font-bold' to={"/"}>Home</NavLink></li>
        <li><NavLink className='mr-4 font-bold' to={"/addProduct"}>Add Product</NavLink></li>
        <li><NavLink className='mr-4 font-bold' to={"/myCart"}>My Cart</NavLink></li>
        <li><NavLink className='mr-4 font-bold' to={"/allProducts"}>All products</NavLink></li>
        <li><NavLink className='mr-4 font-bold' to={"/register"}>Register</NavLink></li>



    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}

                            {user ? (
                                <div className=' flex justify-center items-center gap-3'>
                                    <p className='text-black'>{user.displayName}</p>
                                    <button onClick={handleLogout} className='btn btn-outline btn-primary lg:text-white text-black'>Log Out</button>
                                    <p>{user.email}</p>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle border border-red-400 avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} alt={user.displayName} />
                                        </div>
                                    </label>
                                </div>
                            ) : (
                                <button className='btn btn-outline lg:text-white text-black'><NavLink to={'/login'}>Login</NavLink></button>
                            )}

                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-[30%]' src="https://i.ibb.co/j8Q78Hf/undraw-Shopping-Bags-sbj5.png" alt="" />
                        {/* <h1 className=' text-rose-500'>Cosmetics and Beauty</h1> */}
                    </div>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}

                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <NavLink className='mr-4 font-bold' to={"/login"}><button className=' btn btn-outline'>Login</button></NavLink> */}

                    {user ? (
                            <div className=' flex justify-center items-center gap-3'>
                              <div className='flex flex-col'>
                              <p className=' text-rose-600 font-bold'>{user?.displayName} </p>
                               <p className=' text-rose-600 font-bold text-xs'>{user?.email} </p>
                              </div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle border-rose-300 avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <button onClick={handleLogout} className='btn btn-outline btn-error lg:text-white text-black'> log out</button>
                                
                            </div>
                        ) : (
                            <button className='btn btn-outline btn-error lg:text-white text-black'><NavLink to={'/login'}>Login</NavLink></button>

                        )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;