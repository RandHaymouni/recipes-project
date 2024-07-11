import React from 'react'

const Hero = () => {
    return (
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden w-screen min-h-screen">
            <div class="absolute inset-0">
                <img src="https://www.southernliving.com/thmb/kiA6RNwqrpXAj62q7kWyo2B-umI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Slow-Cooker-Salisbury-Steaks_16x9_104-6c5039ffbedf4b49b38f708f72eda844.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
                <div class="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 class="text-5xl font-bold leading-tight mb-4">Welcome to Our Recipes Corner</h1>
                <p class="text-lg text-gray-300">
                    Dive into a world of culinary delight with recipes crafted for every occasion. Join our community and turn your kitchen into a place of joy and creativity.
                </p>
                <p className='text-gray-300 font-bold mb-10'>
                    Let’s cook up something amazing together!
                </p>
                <a href="/login" class="bg-indigo-600 text-white hover:bg-indigo-400 hover:text-white py-2 px-6 w-48 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
            </div>
        </div >
    )
}

export default Hero