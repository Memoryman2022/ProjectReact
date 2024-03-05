import React, { useState } from "react";

import recipeData from "/recipe.json";
// import { Linter } from "eslint";

export default function Recipies() {
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
      <ul>
        {recipeArray.map((food, index) => (
          <li key={index}>
            <img src={food.image} />
            {food.name}, {food.calories}, {food.servings}
            <button onClick={() => deleteById(food.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
