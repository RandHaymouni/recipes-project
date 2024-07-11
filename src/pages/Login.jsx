import React from 'react'

const Login = () => {
    return (
        <div>
            <div class="min-h-screen w-screen flex items-center justify-center">
                <div class="absolute inset-0 z-0">
                    <img src="https://www.southernliving.com/thmb/kiA6RNwqrpXAj62q7kWyo2B-umI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Slow-Cooker-Salisbury-Steaks_16x9_104-6c5039ffbedf4b49b38f708f72eda844.jpg" alt=""
                        class="w-full h-full object-cover filter blur-lg brightness-50 opacity-75" />
                </div>
                <div class="relative z-10 bg-white p-8 rounded-md shadow-lg">
                    <h1 class="text-xl font-bold mb-4 text-indigo-600">Login</h1>
                    <form action="#" method="POST">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
                            <input
                                class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                id="email" type="email" placeholder="Email" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="password">Password</label>
                            <input
                                class="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                id="password" type="password" placeholder="Password" />
                        </div>
                        <div class="flex items-center justify-between gap-8">
                            <button
                                class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline hover:scale-105 "
                                type="button">
                                Sign In
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-indigo-500 hover:indigo-cyan-800 hover:scale-105"
                                href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login