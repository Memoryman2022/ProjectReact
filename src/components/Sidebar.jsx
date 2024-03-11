import { Link } from "react-router-dom";

export default function Sidebar({ recipes, setRecipes }) {
  return (
    <div className="sidebar">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <Link to={`recipes/${recipe.id}`}>
                <p>{recipe.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/NewRecipeForm" className="submit-recipe-btn">
        Submit New Recipe
      </Link>
    </div>
  );
}
