import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import recipeData from "../../recipe.json";

export default function Recipes() {
	let [recipeArray, setRecipeArray] = useState(recipeData);

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

/*import recipeData from "/recipe.json";
// import { Linter } from "eslint";

export default function Recipes() {
  // console.log(recipeData)
  let [recipeArray, setRecipeArray] = useState(recipeData);

  const calories = recipeData.filter((food) => {
    return food.calories >= 300;
  });
  const deleteById = (id) => {
    setRecipeArray((food) => {
      return food.filter((recipe) => recipe.id !== id);
    });
  };
  return (
    <div className="recipeContainer">
      <div className="listContainer">
        <ul>
          {recipeArray.map((food) => (
            <li key={food.id} className="listRecipe">
              <img src={food.image} />
              <p>Recipe: {food.name}</p>
              <p>Calories: {food.calories}</p>
              <button onClick={() => deleteById(food.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}*/
