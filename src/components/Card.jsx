import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ recipe }) => {
    const navigate = useNavigate();
    const handleButtonClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
        <div className="font-sans py-4 mx-2">
            <div className="flex flex-wrap justify-center items-center w-72">
                <div className="bg-gray-100 rounded-lg group overflow-hidden cursor-pointer relative hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                    <div className="w-full h-full overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img src={recipe.image} alt={recipe.name} className="h-full w-full object-contain" />
                    </div>
                    <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                        <div className="text-center">
                            <h3 className="text-base font-bold text-gray-800 mb-3">{recipe.name}</h3>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Difficulty</span>
                                    <span className="text-black font-medium">{recipe.difficulty}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Rating</span>
                                    <div className="flex gap-1">
                                        <svg className="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <span className="text-black font-medium">{recipe.rating}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Cuisine</span>
                                    <span className="text-black font-medium">{recipe.cuisine}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => handleButtonClick(recipe.id)}
                                className="w-full text-xs bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                Show Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
