import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ recipe }) => {
    const navigate = useNavigate();

    const handleButtonClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
        <div className="overflow-hidden flex flex-col w-72 mt-4 bg-[#f3f3f3] rounded shadow-xl hover:scale-105 hover:shadow-xl">
            <div className="relative">
                <img className="w-full"
                    src={recipe.image}
                    alt={recipe.name} />
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
                <button
                    onClick={() => handleButtonClick(recipe.id)}
                    className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Cooking
                </button>
            </div>
            <p className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out flex justify-center text-black mt-3">
                {recipe.name}
            </p>
            <div className="flex justify-between items-center m-3">
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">Difficulty</span>
                    <span className="text-black font-medium">{recipe.difficulty}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm flex items-cente justify-center">Rating</span>
                    <div className="flex gap-2">
                        <span className="text-black font-medium flex items-center justify-center">{recipe.rating}</span>
                        <span className="text-gray-500">/5</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm flex items-center justify-center">Cuisine</span>
                    <span className="text-black font-medium">{recipe.cuisine}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;
