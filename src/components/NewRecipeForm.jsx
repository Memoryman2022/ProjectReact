import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const NewRecipeForm = ({ addRecipe, recipes, setRecipes, recipeData }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");
  const nav = useNavigate();

  const handleSubmitNewRecipe = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      calories,
      image,
      servings,
      id: recipes.length + 1,
    };
    addRecipe(newRecipe);
    nav("/");

    setName("");
    setCalories("");
    setImage("");
    setServings("");
  };

  return (
    <div>
      <h2>SUBMIT NEW RECIPE</h2>
      <Link to="/">
        <h2>BACK</h2>
      </Link>
      <form onSubmit={handleSubmitNewRecipe} className="submit-new-recipe-form">
        <label>
          NAME OF DISH:
          <input
            type="text"
            name="name"
            placeholder="RECIPE NAME"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          NO. OF CALORIES:
          <input
            type="number"
            name="calories"
            placeholder="CALORIES"
            value={calories}
            onChange={(event) => {
              setCalories(event.target.value);
            }}
          />
        </label>
        <label>
          ADD IMAGE:
          <input
            type="url"
            name="image"
            placeholder="IMAGE URL"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          NO. OF SERVINGS:
          <input
            type="number"
            name="servings"
            placeholder="SERVINGS"
            value={servings}
            onChange={(event) => {
              setServings(event.target.value);
            }}
          />
        </label>
        <button type="submit">SUBMIT RECIPE</button>
      </form>
    </div>
  );
};

export default NewRecipeForm;
