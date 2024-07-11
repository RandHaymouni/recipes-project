import cookingBlog from '../assets/cookingBlog.svg';
import Card from "../components/Card";

const Home = ({ recipes }) => {
    return (
        <div>
            <div className="flex-col m-4 gap-x-3">
                <div className="mb-7">
                    <h1 className="justify-center items-center text-center text-black font-normal text-7xl mt-11">
                        Discover Delicious
                    </h1>
                    <h2 className="flex justify-center items-center text-indigo-600 font-extrabold text-6xl">Recipes</h2>
                </div>
                <p className="text-center text-gray-500 text-lg flex-wrap">
                    Explore a world of flavors and create mouthwatering dishes with our collection of easy-to-follow recipes.
                </p>
            </div>
            <div className="border-b mb-5 flex justify-between text-sm m-14">
                <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase mx-20">
                    <img src={cookingBlog} alt="Cooking Blog" className="h-6 mr-3" />
                    <span className="font-semibold flex items-center">Cooking BLog</span>
                </div>
            </div>
            <div className="flex justify-center items-center gap-5 flex-wrap mx-6">
                {
                    recipes.map((recipe) => {
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