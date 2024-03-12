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

    setRecipes([newRecipe, ...recipeData]);
    setName("");
    setCalories("");
    setImage("");
    setServings("");

    nav("/");
    console.log(recipes);
  };

  return (
    <div className="new-recipe-div">
      <div className="form-header">
        <h2 className="text-form">Share your own recipe below:</h2>
        <img className="food-img" src="../../images/food.png" />
      </div>

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
        <div className="form-buttons-div">
          <button className="submit-recipe-btn-form" type="submit">
            SUBMIT RECIPE
          </button>
          <Link to="/">
            <button className="submit-recipe-btn-form"> RETURN</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewRecipeForm;
