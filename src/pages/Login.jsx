import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                    expiresInMins: 30,
                })
            }).then(res => {
                return res.json();
            }).then(data => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    navigate("/home");
                } else {
                    setValid(false);
                    setErrors({ form: "Invalid username or password!" });
                }
            })
        }
        catch (error) {
            setErrors({ form: "An error occurred during login!" });
        }
    };

    return (
        <div className="min-h-screen w-screen flex items-center justify-center flex-wrap">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://www.southernliving.com/thmb/kiA6RNwqrpXAj62q7kWyo2B-umI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Slow-Cooker-Salisbury-Steaks_16x9_104-6c5039ffbedf4b49b38f708f72eda844.jpg"
                    alt="Recipes Login"
                    className="w-full h-full object-cover object-center blur-md" />
            </div>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center absolute z-10 top-14 left-20 w-24 gap-2 px-3 h-8 me-3 text-sm font-semibold text-indigo-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                <IoMdArrowBack />
                Back
            </button>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto flex flex-wrap">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-indigo-200 p-3">Login</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                {!valid && <span className="text-red-500">{errors.form || `${errors.username || ''} ${errors.password || ''}`}</span>}
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                                        <span className="text-red-700 text-lg mx-2">*</span> UserName
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="UserName"
                                        required
                                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                        <span className="text-red-700 text-lg mx-2">*</span> Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                                    />
                                </div>
                                <div className="relative flex justify-center items-center gap-7">
                                    <button className="bg-indigo-500 text-white rounded-md px-2 py-1 w-24 hover:scale-105" type="submit">
                                        Login
                                    </button>
                                    <a href="#">
                                        <p className="text-black text-sm hover:text-indigo-600 hover:scale-105">Forgot your password?</p>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
                                <title>Google-color</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                        <g id="Google" transform="translate(401.000000, 860.000000)">
                                            <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path>
                                            <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.4802273,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path>
                                            <path d="M23.7136364,37.8666667 C26.6265455,37.8666667 29.2914545,37.144 31.4025,35.8376 L23.8672727,29.8642667 L10.5322727,34.3946667 C14.3275,42.1608 22.3629545,47.4666667 31.6718182,47.4666667 C34.9093182,47.4666667 37.8102273,46.6824 40.2522727,45.302 C45.2505909,42.4586667 46.6202273,35.908 43.3684091,31.3110667 L37.5731818,35.8658667 C35.4313636,37.1602667 33.0663636,37.8666667 31.0058182,37.8666667 C25.7129545,37.8666667 21.1381818,34.5808 19.1515909,30.2090667 L10.5322727,34.3946667 C14.3275,42.1608 22.3629545,47.4666667 31.6718182,47.4666667" id="Fill-3" fill="#34A853"></path>
                                            <path d="M45.5322727,22.7 C45.5322727,20.6336 45.2027727,18.5488 44.6265,16.632 L23.7136364,16.632 L23.7136364,25.7645333 L36.2924545,25.7645333 C35.7685,28.0064 34.4841364,30.0848 32.5363182,31.3488 L37.5377727,35.9816 C43.0820455,31.4912 45.5322727,25.4688 45.5322727,22.7" id="Fill-4" fill="#4285F4"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;
