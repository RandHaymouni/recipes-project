import React, { createContext, useState } from 'react'
export const RecipeContext = createContext([] | null);

/**
 * @param {{
 * children:React.ReactNode
 * }}
 */

const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    return (
        <RecipeContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider