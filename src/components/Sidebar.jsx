import { useState } from "react";
import { Link } from "react-router-dom";
import Recipes from "./Recipe.jsx";
import recipeData from "/recipe.json";

export default function Sidebar() {
	const [recipes, setRecipes] = useState(recipeData);

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
		</div>
	);
}
