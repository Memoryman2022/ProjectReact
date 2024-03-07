import { useState } from "react";
import { Link } from "react-router-dom";
import Recipes from "./Recipe.jsx";
import recipeData from "/recipe.json";

export default function Sidebar() {
  const [recipes, setRecipes] = useState(recipeData);

  return (
    <div className="sidebar">
      <h1>sidebar</h1>
      <h3>Recipes</h3>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`recipe/${recipe.id}`}>
              <Recipes {...recipe} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
