import { Link, useParams } from "react-router-dom";

export default function Recipes({ recipes, setRecipes, recipeData }) {
  const { recipeId } = useParams();
  const recipeInfo = recipeData.find((recipe) => recipe.id === recipeId);

  const deleteById = (id) => {
    setRecipeArray((food) => {
      return food.filter((recipe) => recipe.id !== id);
    });
  };

  return (
    <div className="recipeAlone">
      <li key={recipeInfo.id} className="listRecipe">
        <img src={recipeInfo.image} />
        <p>Recipe: {recipeInfo.name}</p>
        <p>Calories: {recipeInfo.calories}</p>
        <button onClick={() => deleteById(recipeInfo.id)}>Delete</button>
      </li>
    </div>
  );
}
