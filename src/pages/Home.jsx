import { useContext } from 'react';
import cookingBlog from '../assets/cookingBlog.svg';
import Card from "../components/Card.jsx";
import Navbar from '../components/Navbar.jsx';
import { RecipeContext } from '../components/providers/RecipeProvider.jsx';

const Home = () => {
    const recipeContext = useContext(RecipeContext);

    return (
        <div className="flex flex-col flex-wrap">
            <Navbar />
            <div className="flex-col m-4 gap-x-3 mt-14">
                <div className="mt-28 pb-7">
                    <h1 className="justify-center items-center text-center text-black font-normal text-7xl mt-10">
                        Discover Delicious
                    </h1>
                    <h2 className="flex justify-center items-center text-indigo-600 font-extrabold text-6xl">Recipes</h2>
                </div>
                <p className="text-center text-gray-500 text-lg flex-wrap">
                    Explore a world of flavors and create mouthwatering dishes with our collection of easy-to-follow recipes.
                </p>
            </div>
            <div className="border-b mb-5 flex justify-between text-sm m-14">
                <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase mx-16">
                    <img src={cookingBlog} alt="Cooking Blog" className="h-6 mr-3" />
                    <span className="font-semibold flex items-center">Cooking BLog</span>
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap">
                {
                    recipeContext.recipes.map((recipe) => {
                        return (
                            <Card recipe={recipe} key={recipe.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;