import React from 'react';
import { ImHome3 } from "react-icons/im";
import { PiBellRingingBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <header className='flex shadow-lg bg-white font-[sans-serif] min-h-[70px] fixed z-20 top-0 start-0 w-screen flex-wrap'>
            <div
                className='flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 w-full'>
                <div className="flex justify-center items-center gap-3 flex-wrap">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddU1KTCzNYwT2yZTpAMMkPXQRp3Duy1PxMiHaOr67Fonmtm7n9Co52UqBbaRuOnF_ZT8&usqp=CAU"
                        alt="logo"
                        className='w-14'
                    />
                    <p className='text-xl no-underline text-indigo-600 hover:text-blue-dark font-sans font-bold'>Recipes Corner</p>
                </div>
                <div
                    className="bg-gray-100 flex border-2 max-md:order-1 focus-within:border-indigo-500 focus-within:bg-transparent px-4 rounded-sm h-11 lg:w-2/4 max-md:w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                        className="fill-gray-400 mr-4 rotate-90 flex flex-wrap">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type='search' placeholder='Search...' className="w-full outline-none bg-transparent text-[#333] text-sm" />
                </div>
                <div className='flex items-center space-x-5 max-md:ml-auto mx-24'>
                    <PiBellRingingBold className='fill-black h-5 w-5 hover:fill-indigo-600' />
                    <a href="/home">
                        <ImHome3 className='fill-black h-5 w-5 hover:fill-indigo-600' />
                    </a>
                    <button
                        onClick={handleLogout}
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-2 text-center absolute right-7">
                        Logout
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Navbar