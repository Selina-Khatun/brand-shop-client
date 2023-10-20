import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import { AuthContext } from '../../Providers/AuthProvider';
import swal from 'sweetalert';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const LogIn = () => {
    const [user,setUser]=useState(null);
    const [showPassword, setShowPassword] = useState();
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {

        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    swal("Successfully logged in.");
                    navigate(location?.state ? location.state : '/');
                }

            })

            .catch((error) => {
                console.error(error);

                swal('Invalid email or password. Please try again.');
                form.reset('');
            });
    }

    const handleGoogle = () => {
        googleSignIn().then(result => {
            const loggedUser=result.user
            console.log(loggedUser);
            setUser(loggedUser)

            navigate(location?.state ? location.state : '/');
            swal("Successfully logged in.")
        });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-slate-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/3">
                        <img className=' h-[60vh]' src="https://i.ibb.co/0ZF8dQg/undraw-Login-re-4vu2.png" alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm md:max-w-xl shadow-2xl bg-base-100">
                        <div className='text-center p-3'>
                            <h1 className='text-3xl font-semibold'>Welcome back</h1>
                           
                            <button onClick={handleGoogle} className='btn bg-slate-50 px-6 rounded-full my-3 normal-case text-base'><FcGoogle></FcGoogle> in with Google</button>
                            <p className=' '>-------------or------------</p>
                        </div>
                        <form onSubmit={handleLogIn} className="card-body">
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
                                <div className=' relative'>
                                    <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered w-full" required />
                                    <span className=' absolute top-4 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}
                                    </span>

                                </div>
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