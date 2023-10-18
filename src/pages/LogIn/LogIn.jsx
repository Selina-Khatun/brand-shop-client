import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';


const LogIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-slate-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/3">
                        {/* <h1 className="text-5xl font-bold">Welcome! <br /> Please Login to continue.</h1> */}
                        <img className=' h-[60vh]' src="https://i.ibb.co/0ZF8dQg/undraw-Login-re-4vu2.png" alt="" />
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm md:max-w-xl shadow-2xl bg-base-100">
                        <div className='text-center p-3'>
                            <h1 className='text-3xl font-semibold'>Welcome back</h1>
                            <button className='btn bg-slate-50 px-6 rounded-full my-3 normal-case text-base'><FcGoogle></FcGoogle> in with Google</button>
                            <p className=' '>-------------or------------</p>
                        </div>
                        <form className="card-body">
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-700 text-white">Login</button>
                            </div>
                            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                Don’t have an account yet? please
                                <Link to={"/register"}
                                    className="font-medium text-pink-500 transition-colors hover:text-blue-700"

                                >
                                    Register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;