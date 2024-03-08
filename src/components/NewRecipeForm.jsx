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
			<h2>Submit New Recipe</h2>
			<Link to="/">
				<h2>back</h2>
			</Link>
			<form onSubmit={handleSubmitNewRecipe}>
				<label>
					Name of Dish:
					<input
						type="text"
						name="name"
						placeholder="recipe name"
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
					/>
				</label>
				<label>
					No. of Calories:
					<input
						type="number"
						name="calories"
						placeholder="calories"
						value={calories}
						onChange={(event) => {
							setCalories(event.target.value);
						}}
					/>
				</label>
				<label>
					Image:
					<input
						type="url"
						name="image"
						placeholder="Image url"
						value={image}
						onChange={(event) => {
							setImage(event.target.value);
						}}
					/>
				</label>
				<label>
					No. of Servings:
					<input
						type="number"
						name="servings"
						placeholder="searvings"
						value={servings}
						onChange={(event) => {
							setServings(event.target.value);
						}}
					/>
				</label>
				<button type="submit">Add Recipe</button>
			</form>
		</div>
	);
};

export default NewRecipeForm;
