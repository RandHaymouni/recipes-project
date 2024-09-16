import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Hero from '../src/pages/Hero.jsx';
import Home from '../src/pages/Home.jsx';
import Login from '../src/pages/Login.jsx';
import NotFound from '../src/pages/NotFound.jsx';
import RecipeDetails from '../src/pages/RecipeDetails.jsx';
import { RecipeContext } from './components/providers/RecipeProvider.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const recipeContext = useContext(RecipeContext);

  useEffect(() => {
    const getRecipes = () => {
      fetch("https://dummyjson.com/recipes")
        .then(res => res.json()
        ).then(data => {
          recipeContext.setRecipes(data.recipes);
          setLoading(false);
        })
    };
    getRecipes();
  }, []);

  if (loading) {
    return <span class="loader"></span>
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/recipe/:id" element={<PrivateRoute><RecipeDetails /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  )
}

export default App;
