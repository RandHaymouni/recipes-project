import React, { useEffect, useState } from 'react';
import { FcBusinessContact, FcReading, FcTodoList } from "react-icons/fc";
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isHeartRed, setIsHeartRed] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleHeartClick = () => {
        setIsHeartRed(!isHeartRed);
    };

    useEffect(() => {
        const getRecipe = () => {
            fetch(`https://dummyjson.com/recipes/${id}`)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setRecipe(data);
                    setLoading(false);
                })
        };
        getRecipe();
    }, [id]);

    if (loading) {
        return <span class="loader"></span>
    }

    return (
        <>
            <Navbar />
            <div className="font-sans min-h-screen w-screen bg-white">
                <div className="p-6 lg:max-w-7xl max-w-xl mx-auto my-20">
                    <div class="grid items-center grid-cols-1 lg:grid-cols-5 gap-6 shadow-xl p-6 rounded-lg border-2 border-indigo-100">
                        <div class="lg:col-span-3 w-full top-0 px-5 text-center border-4 border-indigo-100 rounded-md">
                            <div class="px-4 py-10 rounded-lg relative flex items-center">
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="w-3/4 rounded-3xl object-cover m-7 mx-auto" />
                                <button
                                    type="button"
                                    className="absolute top-4 right-4 bg-white border-indigo-100"
                                    onClick={handleHeartClick}>
                                    <svg xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2048px-Heart_coraz%C3%B3n.svg.png" width="20px" fill={isHeartRed ? "#ff0000" : "#3949AB"} className="bg-white" viewBox="0 0 64 64">
                                        <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                            data-original="#000000">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-white w-full p-6 flex flex-col flex-wrap">
                            <h2 className="text-2xl font-extrabold text-gray-800">{recipe.name} | Recipe</h2>
                            <div className="flex space-x-2 mt-4 border-b-2 border-indigo-600 pb-3 flex-wrap">
                                <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <h4 className="text-gray-800 text-base mx-3">{recipe.rating}</h4>
                                <p className="text-gray-600">/5</p>
                            </div>
                            <div className="flex justify-start mt-9 flex-wrap items-center">
                                <p className="text-black font-extrabold text-xl mb-4 flex justify-center items-center gap-3">
                                    <FcBusinessContact className="h-6 w-6" />
                                    About:
                                </p>
                            </div>
                            <ul className="flex flex-col gap-y-3 gap-x-72 flex-wrap justify-start">
                                <li>
                                    <span className="text-lg font-bold text-gray-900 mx-3">
                                        Difficulty:
                                    </span>
                                    <span className="font-normal text-gray-900">{recipe.difficulty}</span>
                                </li>
                                <li>
                                    <span className="text-lg font-bold text-gray-900 mx-3">
                                        Preparing Time:
                                    </span>
                                    <span className="font-normal text-gray-900">{recipe.prepTimeMinutes} Min</span>
                                </li>
                                <li>
                                    <span className="text-lg font-bold text-gray-900 mx-3">
                                        Cooking Time:
                                    </span>
                                    <span className="font-normal text-gray-900">{recipe.cookTimeMinutes} Min</span>
                                </li>
                                <li>
                                    <span className="text-lg font-bold text-gray-900 mx-3">
                                        Calories per serving:
                                    </span>
                                    <span className="font-normal text-gray-900">{recipe.caloriesPerServing} Cal</span>
                                </li>
                                <li>
                                    <span className="text-lg font-bold text-gray-900 mx-3">
                                        Meal Type:
                                    </span>
                                    <span className="font-normal text-gray-900">{recipe.mealType}</span>
                                </li>
                                <li>
                                    <span className="text-lg font-bold text-gray-900 mx-3">
                                        Review Count:
                                    </span>
                                    <span className="font-normal text-gray-900">{recipe.reviewCount}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 flex justify-evenly items-center mt-16 bg-white border-2 border-indigo-100 shadow-xl rounded-lg gap-10 w-full flex-wrap">
                        <div className="flex flex-col border-4 p-5 border-indigo-100 rounded-md">
                            <h3
                                className="flex justify-center items-center gap-3 text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 p-3">
                                <FcTodoList />
                                Ingredients:
                            </h3>
                            <ul className="flex flex-col mt-4">
                                {
                                    recipe.ingredients?.map(inst =>
                                        <li className="text-black font-semibold rounded-md mb-2 list-disc mx-10">
                                            {inst}
                                        </li>)
                                }
                            </ul>
                        </div>
                        <div className="flex flex-col border-4 p-5 border-indigo-100 rounded-md">
                            <h2
                                className="text-black text-2xl font-bold mb-4 flex justify-center items-center gap-3 mx-6 border-b-2 border-indigo-600 p-3">
                                <FcReading />
                                Instructions:
                            </h2>
                            <ul className="text-black flex-col list-decimal justify-around mb-6 mx-6">
                                {
                                    recipe.instructions?.map(inst =>
                                        <li className="text-black font-semibold mb-1 p-2 list-decimal">
                                            {inst}
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="mt-16 p-6 border-2 bg-white border-indigo-100 sadow-xl rounded-lg flex flex-wrap">
                        <div className="bg-white rounded-md p-6 border-4 border-indigo-100">
                            <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                            <div className="grid md:grid-cols-2 gap-12 mt-4">
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">5.0</p>
                                        <svg className="w-5 fill-indigo-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-2/3 h-full rounded bg-indigo-600"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">4.0</p>
                                        <svg className="w-5 fill-indigo-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/3 h-full rounded bg-indigo-600"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">3.0</p>
                                        <svg className="w-5 fill-indigo-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/6 h-full rounded bg-indigo-600"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">2.0</p>
                                        <svg className="w-5 fill-indigo-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-1/12 h-full rounded bg-indigo-600"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-800 font-bold">1.0</p>
                                        <svg className="w-5 fill-indigo-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                            <div className="w-[6%] h-full rounded bg-indigo-600"></div>
                                        </div>
                                        <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-start">
                                        <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                        <div className="ml-3">
                                            <h4 className="text-sm font-bold text-gray-800">John Doe</h4>
                                            <p className="text-sm mt-4 text-gray-800">Recipes here are more than just instructions; they're a celebration of flavor and creativity. Each dish tells a story of tradition and innovation, inviting you to savor every moment and create unforgettable culinary experiences.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RecipeDetails