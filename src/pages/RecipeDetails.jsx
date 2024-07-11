import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

const RecipeDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loding, setLoding] = useState(true);
    const [visibleParagraph, setVisibleParagraph] = useState(null);

    const handleButtonClick = (paragraphNumber) => {
        setVisibleParagraph(paragraphNumber);
    };

    useEffect(() => {
        const getRecipe = () => {
            fetch(`https://dummyjson.com/recipes/${id}`)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setRecipe(data);
                    setLoding(false);
                })
        };
        getRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    if (loding) {
        <div class="relative flex justify-center items-center">
            <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" class="rounded-full h-28 w-28" />
        </div>
    }

    return (
        <div class="font-sans bg-indigo-100 w-screen min-h-screen">
            <div class="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div class="bg-indigo-200 px-4 py-12 rounded-xl">
                            <img src={recipe.image} alt="Product" class="w-9/14 rounded object-cover mx-auto" />
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <h2 class="text-3xl font-bold text-black">{recipe.name} | Recipe</h2>

                        <div class="flex space-x-2 mt-4">
                            <svg class="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-[18px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <h4 class="text-black text-base">{recipe.rating}</h4>
                        </div>
                        <div class="mt-8">
                            <h3 class="text-xl font-semibold text-black">About the {recipe.name}:</h3>
                            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                                <li class="flex items-center gap-3">
                                    <span class="text-lg font-bold text-gray-900">Difficulty:</span>
                                    <span class="font-medium text-gray-900">{recipe.difficulty}</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <span class="text-lg font-bold text-gray-900">Preparing Time:</span>
                                    <span class="font-medium text-gray-900">{recipe.prepTimeMinutes} Min</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <span class="text-lg font-bold text-gray-900">Cooking Time: </span>
                                    <span class="font-medium text-gray-900">{recipe.cookTimeMinutes} Min</span>
                                </li>
                                <li class="flex items-center gap-3">
                                    <span class="text-lg font-bold text-gray-900">Calories per serving: </span>
                                    <span class="font-medium text-gray-900">{recipe.caloriesPerServing} Cal</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-8">
                            <div className="flex flex-col justify-start">
                                <div>
                                    <button
                                        onClick={() => handleButtonClick(1)}
                                        className="text-md bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                        Show Ingredients
                                    </button>
                                    <button
                                        onClick={() => handleButtonClick(2)}
                                        className="text-md bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out font-medium">
                                        Show Instructions
                                    </button>
                                </div>
                                {visibleParagraph === 1 && (
                                    <div className="mt-4 p-4 bg-indigo-200 rounded shadow-2xl">
                                        <h3 class="text-xl font-extrabold text-black">ingredients:</h3>
                                        <ul class="space-y-2 list-disc mt-4 pl-4 text-md text-black font-semibold">
                                            {
                                                recipe.ingredients.map(ingredients =>
                                                    <li >
                                                        {ingredients}
                                                    </li>)
                                            }
                                        </ul>
                                    </div>
                                )}

                                {visibleParagraph === 2 && (
                                    <div className="mt-4 p-4 bg-indigo-200 rounded shadow-2xl">
                                        <h3 class="text-xl font-extrabold text-black">Instructions:</h3>
                                        <ul class="space-y-2 list-decimal mt-4 pl-4 text-md text-black font-semibold">
                                            {
                                                recipe.instructions.map(instructions =>
                                                    <li >
                                                        {instructions}
                                                    </li>)
                                            }
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails