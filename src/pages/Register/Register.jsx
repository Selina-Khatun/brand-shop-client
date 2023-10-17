import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div class="max-w-3xl mx-auto">
                    <div
                        class="bg-white shadow-md border border-gray-200 rounded-lg md:max-w-3xl max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form class="space-y-6" action="#">
                            <h3 class="text-xl font-medium text-gray-900 dark:text-white"> Nice to meet you! Enter your details to register.</h3>
                            <div>
                                <label for="name" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your name</label>
                                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required />
                            </div>
                            <div>
                                <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="email" required />
                            </div>
                            <div>
                                <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-start">
                                    <div class="flex items-center gap-3 h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">  I agree the Terms and Conditions</label>
                                    </div>
                                   
                                </div>
                              
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <Link to={"/login"}
                                        class="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                       
                                    >
                                       LogIn
                                    </Link>
                            </div>
                        </form>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Register;