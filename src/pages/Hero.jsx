import React from 'react'

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden w-screen min-h-screen flex flex-col flex-wrap">
            <div className="absolute inset-0">
                <img
                    src="https://www.southernliving.com/thmb/kiA6RNwqrpXAj62q7kWyo2B-umI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Slow-Cooker-Salisbury-Steaks_16x9_104-6c5039ffbedf4b49b38f708f72eda844.jpg"
                    alt="Background Image"
                    className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Recipes Corner</h1>
                <div className="text-lg text-gray-300 mb-10">
                    <p >
                        Welcome to Flavorful Recipes! To access our exclusive collection of delicious recipes and personalized cooking tips,
                    </p>
                    <p>
                        please log in to your account.
                    </p>
                    <p className="font-bold">Join us and start your culinary adventure today!</p>
                </div>
                <a
                    href="/login"
                    className="bg-indigo-600 text-white hover:bg-indigo-400 hover:text-white py-2 px-6 w-48 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                    Get Started
                </a>
            </div>
        </div >
    )
}

export default Hero