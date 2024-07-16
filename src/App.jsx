import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import Hero from '../src/pages/Hero.jsx';
import Home from '../src/pages/Home.jsx';
import Login from '../src/pages/Login.jsx';
import NotFound from '../src/pages/NotFound.jsx';
import RecipeDetails from '../src/pages/RecipeDetails.jsx';
import './App.css';
import PrivateRoute from './routes/PrivateRoute.jsx';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipes = () => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => {
          return res.json();
        }).then((data) => {
          setRecipes(data.recipes);
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
        <Route path="/home" element={<PrivateRoute><Home recipes={recipes} /></PrivateRoute>} />
        <Route path="/recipe/:id" element={<PrivateRoute><RecipeDetails /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  )
}

export default App;
