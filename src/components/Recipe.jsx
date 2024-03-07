import { useState } from "react";

import Sidebar from "../components/Sidebar.jsx";

import recipeData from "/recipe.json";
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
      {/* <Sidebar /> */}
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
}
