import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from '../src/pages/Hero.jsx';
import Home from '../src/pages/Home.jsx';
import Login from '../src/pages/Login.jsx';
import NotFound from '../src/pages/NotFound.jsx';
import RecipeDetails from '../src/pages/RecipeDetails.jsx';
import './App.css';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    const getRecipes = () => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => {
          return res.json();
        }).then((data) => {
          setRecipes(data.recipes);
          setLoding(false);
        })
    };
    getRecipes();
  }, []);

  if (!loding) {
    <span class="loader"></span>
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
